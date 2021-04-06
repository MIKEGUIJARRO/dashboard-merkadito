import React from 'react'

export const Primary = ({ icon, children, cb, active = true, alignLeft = false }) => {

    const classInteracion = active ? `text-gray-900 bg-white` : 
    `bg-transparent font-label hover:text-gray-900 hover:bg-white hover:shadow-sm`;
    
    return (
        <button className={`px-4 py-2 rounded-lg transition 
        duration-300 ease-in-out focus:ring active:shadow-none 
        focus:outline-none focus:ring-gray-400 ${classInteracion}`}
            onClick={() => { cb && cb(); }
            }>
            <div className={`flex flex-row space-x-4 ${alignLeft ? "justify-start" : "justify-center"}`}>
                {icon && icon}
                <h6>{children}</h6>
            </div>
        </button>
    )
}
