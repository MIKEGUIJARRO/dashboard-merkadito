import React from 'react'

export const Logo = () => {
    return (
        <button className="transition 
        duration-300 ease-in-out focus:ring 
        focus:outline-none focus:ring-gray-400 rounded-lg" >
            <div className="color-off-white p-4 flex flex-row justify-center shadow-sm rounded-lg">
                <img alt="Merkadito Logo" src="./images/logo.svg"></img>
            </div>
        </button>
    )
}
