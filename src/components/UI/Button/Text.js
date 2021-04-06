import React from 'react'

export const Text = ({ logo, text, cb, status, alignLeft = false }) => {
    return (
        <button className={`px-4 py-2 
        font-label items-center rounded-lg transition duration-300 ease-in-out
        hover:text-gray-900 hover:bg-white hover:shadow-sm focus:outline-none active:bg-transparent active:shadow-none`}
            onClick={() => { cb && cb(); }
            }>
            <div className={`flex flex-row space-x-4 ${alignLeft?"justify-start":"justify-center"}`}>
                {logo && logo}
                <h6>{text}</h6>
            </div>
        </button>
    )
}
