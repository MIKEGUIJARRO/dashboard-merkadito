import React from 'react'
import { ShoppingCart, MapPin, Package, Settings } from 'react-feather';
import { Text } from '../../UI/Button/Text';


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
                    return <Text key={option.name}
                        logo={option.logo}
                        text={option.name}
                        alignLeft={true} />
                })
            }

        </ul>
    )
}
