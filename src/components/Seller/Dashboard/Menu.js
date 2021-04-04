import React from 'react'
import { ShoppingCart, MapPin, Package, Settings } from 'react-feather';
import { Primary } from '../../UI/Button/Primary';


export const Menu = () => {

    const options = [{
        name: "Orders",
        logo: <ShoppingCart />
    },
    {
        name: "Inventary",
        logo: <Package />
    },
    {
        name: "Stores",
        logo: <MapPin />
    },
    {
        name: "Settings",
        logo: <Settings />
    }];


    return (

        <ul className="flex flex-col space-y-2 items-stretch">

            {
                options.map((option) => {
                    return <Primary key={option.name} logo={option.logo} title={option.name} />
                })
            }

        </ul>
    )
}
