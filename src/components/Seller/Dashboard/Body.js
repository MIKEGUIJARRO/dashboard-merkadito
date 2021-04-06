import React from 'react'

import { Edit2, Trash, Eye } from 'react-feather';


export const Body = () => {

    const items = [
        {
            id: 1,
            name: "Item super cool para enseñar todo el conocimiento que me cargo papirrin",
            price: 12.25,
            image: "https://source.unsplash.com/random",
            totalSales: 12524,
            status: false,
        },
        {
            id: 2,
            name: "Item 1",
            price: 12.25,
            image: "https://source.unsplash.com/random",
            totalSales: 12524,
            status: true,
        },
        {
            id: 3,
            name: "Item 1",
            price: 12.25,
            image: "https://source.unsplash.com/random",
            totalSales: 12524,
            status: true,
        },
        {
            id: 4,
            name: "Item 1",
            price: 12.25,
            image: "https://source.unsplash.com/random",
            totalSales: 12524,
            status: true,
        }
    ]

    return (
        <div>
            <h4 className="pb-6">Items</h4>
            <table class="w-full table-auto">
                <thead>
                    <tr className="bg-gray-200 text-gray-600 text-sm leading-normal">
                        <th className="py-3 px-6 text-left rounded-tl-lg">Name</th>
                        <th className="py-3 px-6 text-center">Image</th>
                        <th className="py-3 px-6 text-left">Price</th>
                        <th className="py-3 px-6 text-left">Total Sales</th>
                        <th className="py-3 px-6 text-center">Status</th>
                        <th className="py-3 px-6 text-center rounded-tr-lg">Actions</th>

                    </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                    {
                        items.map((item) => {
                            return <tr className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6 text-left whitespace-nowrap font-semibold whitespace-pre-wrap">{item.name}</td>
                                <td className="py-3 px-6 text-center whitespace-nowrap flex justify-center">
                                    <img className="rounded-full h-16 w-16 max-w-min" src={item.image} />
                                </td>
                                <td className="py-3 px-6 text-left whitespace-nowrap">${item.price}</td>
                                <td className="py-3 px-6 text-left whitespace-nowrap">{item.totalSales}</td>
                                <td className="py-3 px-6 text-center">
                                    <span className={`rounded-full py-1 px-2 text-xs font-semibold ${item.status ? "bg-green-300 text-green-700" : "bg-red-300 text-red-700"}`}>
                                        {item.status ? "Activo" : "Inactivo"}
                                    </span>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex justify-between items-center space-x-1">
                                        <button className="transition duration-100 ease-in-out transform hover:scale-125">
                                            <Eye size={22} />
                                        </button>
                                        <button className="transition duration-100 ease-in-out transform hover:scale-125">
                                            <Edit2 size={22} />
                                        </button>
                                        <button className="transition duration-100 ease-in-out transform hover:scale-125 hover:text-red-400">
                                            <Trash size={22} />
                                        </button>
                                    </div>

                                </td>

                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
