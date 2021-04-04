import React from 'react'
import { DollarSign, Percent, Truck, ShoppingBag, ArrowUp } from 'react-feather';
import ScrollArea from 'react-scrollbar';


export const Header = () => {

    const options = [{
        id: 1,
        name: "Revenue",
        logo: <DollarSign />,
        bgColor: "bg-green-100"
    },
    {
        id: 2,
        name: "Percent",
        logo: <Percent />,
        bgColor: "bg-blue-100"
    },
    {
        id: 3,
        name: "Truck",
        logo: <Truck />,
        bgColor: "bg-indigo-100"
    },
    {
        id: 4,
        name: "ShoppingBag",
        logo: <ShoppingBag />,
        bgColor: "bg-yellow-100	"
    }];

    return (
        <div className="pb-10">
            <h4 className="pb-6">Insights</h4>
            <ul className="inline-block space-x-5">
                {
                    options.map((option) => {
                        return <li key={option.id} className="inline-block">
                            <button className={`${option.bgColor} p-4 rounded-lg transition w-40 text-left hover:shadow-sm`}>
                                <div className="w-full p-4 flex justify-between bg-white rounded-xl shadow-sm mb-6">
                                    {option.logo}
                                    <div className="flex justify-start items-center text-sm text-green-600 font-bold	">
                                        <ArrowUp size={20} />
                                        <span>15.5%</span>
                                    </div>
                                </div>
                                <div>
                                    <h6 className="font-bold	">Titulo card</h6>
                                    <h4>31.5</h4>
                                </div>
                            </button>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

