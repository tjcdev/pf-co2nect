#!/usr/bin/env python
# encoding: utf-8
import json
from flask import Flask, request


app = Flask(__name__)

import requests
import json
import pandas as pd
import time
import datetime
import numpy as np

co2e = pd.DataFrame([['FLYING', 0.1753],
                    ['DRIVING', 0.1276],
                    ['WALKING', 0],
                    ['BICYCLING', 0],
                    ['RAIL', 0.06],
                    ['METRO_RAIL', 0.06],
                    ['SUBWAY', 0.06],
                    ['TRAM', 0.06],
                    ['MONORAIL', 0.06],
                    ['HEAVY_RAIL', 0.06],
                    ['COMMUTER_TRAIN', 0.06],
                    ['HIGH_SPEED_TRAIN', 0.06],
                    ['METRO_RAIL', 0.06],
                    ['BUS', 0.089],
                    ['INTERCITY_BUS', 0.089],
                    ['TROLLEYBUS', 0.089],
                    ['SHARE_TAXI', 0.064],
                    ['FERRY', 0.019],
                    ['CABLE_CAR', 0],
                    ['GONDOLA_LIFT', 0],
                    ['FUNICULAR', 0],
                    ['OTHER', 0]
                    ], 
                    columns=['vehicle', 'emission'])

API_KEY = 'AIzaSyA1Jj6xS5R0gj8B8fnM80OqlBbbIYYdanU'

def parse_google_directions(origin, destination, arrival_date):
    arrival_time_unix = int(time.mktime(datetime.datetime.strptime(arrival_date, "%d/%m/%Y").timetuple()))

    results = {}

    min_emissions = 1e10
    best_mode = 'transit'

    for mode in ['driving', 'transit']: #(transit_mode: [bus, subway, train, tram, rail==train|tram|subway])]

        url = f'https://maps.googleapis.com/maps/api/directions/json?origin={origin}&destination={destination}&mode={mode}&key={API_KEY}&arrival_time={arrival_time_unix}'
        print(url)

        payload={}
        headers = {}

        response = requests.request("GET", url, headers=headers, data=payload)

        response = json.loads(response.text)

        df = pd.DataFrame(columns=['vehicle', 'distance'])
        details = pd.DataFrame(columns=['arrival_date', 'duration'])

        details = details.append({'arrival_date': arrival_date,
                                'duration': response['routes'][0]['legs'][0]['duration']['text']}, ignore_index=True)

        steps = response['routes'][0]['legs'][0]['steps']
        for step in steps:
            distance = step['distance']['value'] / 1000
            travel_mode = step['travel_mode']

            if travel_mode == 'TRANSIT':
                vehicle = step['transit_details']['line']['vehicle']['type']
            else:   
                vehicle = travel_mode

            df = df.append({'vehicle': vehicle, 'distance': distance}, ignore_index=True)

        results[mode] = {}
        results[mode]['best'] = False
        results[mode]['steps'] = df

        results[mode]['steps'] = results[mode]['steps'].merge(co2e, on='vehicle')
        results[mode]['steps']['co2e'] = results[mode]['steps']['distance'] * results[mode]['steps']['emission']
        
        results[mode]['total_co2e'] = round(sum(results[mode]['steps']['co2e']), 2)
        results[mode]['total_distance'] = round(sum(results[mode]['steps']['distance']), 2)

        if results[mode]['total_co2e'] < min_emissions:
            best_mode = mode

    results[best_mode]['best'] = True
    results['average_co2e'] = round(np.mean([results[mode]['total_co2e'] for mode in results.keys()]), 2)
    results['best_co2e_perc'] =  round(results[best_mode]['total_co2e'] / results['average_co2e'], 2)

    return results

origin = 'Edinburgh'
destination = 'London'
arrival_date = '01/12/2021'
start_time = '17:30'
end_time = '21:30'
duration = "4 hours"

@app.route('/', methods=['GET'])
def index():
    origin = request.args.get('origin')
    destination = request.args.get('destination')
    arrival_date = request.args.get('arrival_date')

    results = parse_google_directions(origin, destination, arrival_date)

    # Add flying
    flying_distance = round(sum(results['driving']['steps']['distance']) * 0.6, 2)
    results['flying'] = {}
    results['flying']['steps'] = pd.DataFrame(columns=['vehicle', 'distance'])
    results['flying']['steps'] = results['flying']['steps'].append({'vehicle': 'FLYING', 'distance': flying_distance}, ignore_index=True)
    results['flying']['steps'] = results['flying']['steps'].append({'vehicle': 'DRIVING', 'distance': 15}, ignore_index=True)
    results['flying']['steps'] = results['flying']['steps'].append({'vehicle': 'DRIVING', 'distance': 15}, ignore_index=True)
    # Add CO2e
    results['flying']['steps'] = results['flying']['steps'].merge(co2e, on='vehicle')
    results['flying']['steps']['co2e'] = results['flying']['steps']['distance'] * results['flying']['steps']['emission']

    results['flying']['total_co2e'] = round(sum(results['flying']['steps']['co2e']), 2)
    results['flying']['total_distance'] = round(sum(results['flying']['steps']['distance']), 2)
    results['flying']['best'] = False

    # Construct JSON
    journeys = []
    for mode in ['driving', 'transit', 'flying']:
        _dict = results[mode]
        journey =  {
            "start_time": start_time,
            "end_time": end_time,
            "duration": duration,
            "date": arrival_date,
            "vehicle": mode,
            "distance": f'{_dict["total_distance"]} km',
            "co2e": f'{_dict["total_co2e"]} kg',
            "message": "This journey is 5 times more efficient than flying.",
            "best": _dict['best']
        }
        journeys = journeys + [journey]

    response = {
        "journey": journeys,
        "average_emissions": results['average_co2e'],
        "best_emission_perc": results['best_co2e_perc']
    }

    return response

app.run()