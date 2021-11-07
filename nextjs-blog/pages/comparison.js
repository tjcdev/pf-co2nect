import React from 'react'

import Option from '../components/Option/Option'

const comparison = () => {
    return (
        <div className="container">

            <div className="initial">

                <Option />
                <div className="note">
                    <p>Note:</p>
                    <p>Travelling by this option emit the same amount of CO2e as taking 6 trips by using car!</p>
                </div>
                
            </div>

            <div className="alternative">

                <Option />
                
            </div>

            <div className="btn-group">
                    <button className="btn-change btn">Change</button>
                    <button className="btn-continue btn">Continue</button>
            </div>

            <style jsx>{`
                .container {
                    margin: 0 10%;
                    padding-top: 30px; 
                }

                .initial {
                    border: solid #D1F5FF;
                    padding: 30px 50px;
                    margin-bottom: 30px;
                }

                .alternative {
                    border: solid #D1F5FF;
                    padding: 30px 50px;
                }

                .btn-group {
                    display: flex;
                    justify-content: right;
                    margin-top: 20px;
                }

                .btn {
                    padding: 5px 10px;
                    border: none;
                    color: white;
                    font-size: 16px;
                    font-weight: bold;
                }

                .btn-change {
                    margin-right: 10px;
                    background-color: #FFD700;
                }

                .btn-continue {
                    background-color: #749C75;
                    
                }

            `}</style>
            
        </div>
    )
}

export default comparison
