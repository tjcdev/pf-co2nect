import React from 'react'

import { useRouter } from 'next/router'

const Option = ({from, to, depart, arrive, duration, transport, co2e, price}) => {

    const router = useRouter();

    const isGood = co2e > 75 ? true : false;

    price = price ? price : "$ ??"

    const handleClick = (e) => {

        e.preventDefault()
        router.push({
            pathname: '/comparison',
            query: {
                from: "edi",
                to: "lhr",
                depart: "01/12/2021",
            }
        })

    }

    return (
        <div className="container">

            <div className="green-banner">
                <p><span className="bold">{co2e}%</span> less carbon emission than the average search</p>
            </div>

            <div className="option">

                <div className="left-col">

                    <div className="col-1">
                        
                        <p className="date depart">{depart}</p>
                        <p className="from">{from}</p>

                    </div>

                    <div className="col-2">

                        <p className="duration">{duration}</p>
                        <div className="arrow"></div>
                        <span className="transport">{transport}</span>
                        
                    </div>

                    <div className="col-3">

                        <p className="date arrive">{arrive}</p>
                        <p className="to">{to}</p>

                    </div>

                </div>

                <div className="right-col">

                    <div className="price">
                        <p>{price}</p>
                    </div>

                    <div className="select-btn">
                        <button type="button" onClick={handleClick}>SELECT</button>
                    </div>

                </div>

            </div>

            <style jsx>{`
                
                .select-btn button {
                    width: 120px;
                    height: 40px;
                }

                .container {
                    display: flex;
                    flex-direction: column;
                    margin: auto;
                    padding: 10px 0;
                }

                .green-banner {
                    padding: 5px 0;
                }

                .green-banner p {
                    display: inline;
                    padding: 5px 10px;
                    background-color: ${isGood ? '#62FC65' : '#FFD700'};
                    font-size: 12px;
                }

                .option {
                    display: flex;
                    justify-content: space-between;
                    margin: 20px 0;
                    text-align: center;
                    background-color: #D1F5FF;
                    padding: 20px;
                    margin: 0;
                }

                .left-col {
                    display: flex;
                    justify-content: space-around;
                    width: 400px;
                }

                .right-col {

                }

                .price p {
                    font-weight: bold;
                    margin-bottom: 10px;
                    font-size: 20px;
                }

                .left-col col-2 {

                    display: flex;
                    flex-direction: column;

                }

                .transport {
                    display: block;
                }

                .arrow {
                    display: inline-block;
                    height: 2px;
                    width: 150px;
                    background-color: black;

                }

                .depart, .arrive {
                    font-size: 32px;
                }

                .select-btn button {
                    background-color: #749C75;
                    border-width: thin;
                    color: white;
                    font-weight: bold;
                    font-size: 16px;
                }

                .date {
                    font-weight: 600;
                }

                .bold {
                    font-weight: 600;
                }

            `}</style>

            <style jsx global>{`
                    html,
                    body {
                    width: 100%;
                    height: 100%;
                    padding: 0;
                    margin: 0;
                    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                        Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                        sans-serif;
                    }

                    * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                    }
            `}</style>
        </div>
    )
}

export default Option
