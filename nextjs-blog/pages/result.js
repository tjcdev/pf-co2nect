import React from 'react'

import Option from '../components/Option/Option'

import SearchBarOnly from '../components/SearchBarOnly/SearchBarOnly'

const result = () => {
    return (
        <div className="container">

            <SearchBarOnly />
            <div className="height"></div>
            <Option />
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
