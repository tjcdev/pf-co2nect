import React from 'react'

import { useRouter } from 'next/router'

const Option = () => {

    const router = useRouter();

    return (
        <div className="container">

            <div className="green-banner">
                <p>20% less carbon emission than the average search</p>
            </div>

            <div className="option">

                <div className="left-col">

                    <div className="col-1">
                        
                        <p className="depart">17:30</p>
                        <p className="from">EDI</p>

                    </div>

                    <div className="col-2">

                        <p className="duration">2 hr 30 min</p>
                        <div className="arrow"></div>
                        <span className="transport">Car</span>
                        
                    </div>

                    <div className="col-3">

                        <p className="arrive">22:00</p>
                        <p className="to">LHR</p>

                    </div>

                </div>

                <div className="right-col">

                    <div className="price">
                        <p>RM20</p>
                    </div>

                    <div className="select-btn">
                        <button type="button">SELECT</button>
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
                    background-color: #62FC65;
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
