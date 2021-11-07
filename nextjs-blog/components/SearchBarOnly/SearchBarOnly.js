import React from 'react'

import { useRouter } from 'next/router'

const SearchBarOnly = () => {

    const router = useRouter();

    const handleClick = (e) => {

        e.preventDefault()
        router.push({
            pathname: '/result',
            query: {
                from: "edi",
                to: "lhr",
                depart: "01/12/2021",
            }
        })
    }

    return (
        <div>
            <div className="search-bar-input">

                <div className="input location">
                    <label>From</label>
                    <input type="text" className="first-input"></input>
                </div>

                <div className="input location">
                    <label>To</label>
                    <input type="text"></input>
                </div>

                <div className="input date">
                    <label>Depart</label>
                    <input type="date"></input>
                </div>

                <div className="input date">
                    <label>Return</label>
                    <input type="date"></input>
                </div>

                <div className="search-button">
                    <button className="the-search-button" onClick={handleClick}>Search</button>
                </div>

            </div>

            <style jsx>{`

                .search-bar {
                    width: 100%;
                    height: 200px;
                    display: flex;
                }

                .search-bar-blue {
                    margin: auto;
                    padding: 30px;
                    display: flex;
                    background-color: #D1F5FF;
                }

                .inner-search-bar {
                    margin: auto;
                    justify-content: center;
                }

                .search-bar-input {
                    display: flex;
                    padding-top: 30px;
                    
                }

                .input {
                    display: flex;
                    flex-direction: column
                }

                .search-button {
                    display: flex;
                    flex-direction: column-reverse;
                }

                .the-search-button {
                    height: 60px;
                    width: 90px;
                    border-radius: 0 10px 10px 0;
                    border-width: thin;
                    background-color: #749C75;
                    color: white;
                    font-weight: bold;
                    font-size: 16px;
                }

                .search-bar-input input {
                    height: 60px;
                    padding-left: 10px;
                    font-size: 16px;
                }

                .preferred-transport {
                    display: flex;
                    margin-top: 20px;
                }

                .preferred-transport p {
                    margin: 0;
                }

                .margin-l {
                    margin-left: 30px;
                }

                .margin-l label {
                    margin-left: 5px;
                }

                .first-input {
                    border-radius: 10px 0 0 10px;
                    border-width: thin;
                }


            `}</style>
        </div>
    )
}

export default SearchBarOnly
