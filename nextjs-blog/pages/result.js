import React from 'react'

import Option from '../components/Option/Option'

import SearchBarOnly from '../components/SearchBarOnly/SearchBarOnly'

const result = () => {
    return (
        <div className="container">

            <SearchBarOnly />
            <div className="height"></div>
            <Option 
                from="EDI" 
                to="LHR" 
                duration="2 hr 30 min" 
                depart="17:30" 
                arrive="22:00" 
                transport="Car"
                price="$ 99" 
                co2e={30}/>
            <Option />
            <Option />
            <Option />

            <style jsx>{`
                .container {
                    margin: 0 10%;
                    padding-bottom: 100px; 
                }

                .height {
                    height: 50px;
                }
            `}</style>

        </div>

        
    )
}

export default result
