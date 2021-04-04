import React from 'react'

export const Primary = ({ logo, title, cb, status }) => {
    return (
        <button className="flex flex-row space-x-4 w-100 px-4 py-2 
        font-label items-center rounded-lg transition duration-500 ease-in-out
        hover:text-gray-900 hover:bg-white hover:shadow-sm"
            onClick={
                () => {
                    cb && cb();
                }
            }>
            {logo && logo}
            <h6>{title}</h6>
        </button>
    )
}
