import React from 'react'
import { ShoppingCart, MapPin, Package, Settings } from 'react-feather';
import { Primary as ButtonPrimary } from '../../UI/Button/Primary';


export const Menu = () => {

    const options = [{
        name: "Orders",
        icon: <ShoppingCart />
    },
    {
        name: "Inventary",
        icon: <Package />
    },
    {
        name: "Stores",
        icon: <MapPin />
    },
    {
        name: "Settings",
        icon: <Settings />
    }];


    return (

        <ul className="flex flex-col space-y-2 items-stretch">

            {
                options.map((option) => {
                    return <ButtonPrimary key={option.name}
                        icon={option.icon}
                        active={false}
                        alignLeft={true} >{option.name} </ButtonPrimary>
                })
            }

            <ButtonPrimary active={true}>Contenido</ButtonPrimary>

        </ul>
    )
}
