import React from 'react'
import { Logo } from '../../components/Seller/Dashboard/Logo'
import { Menu } from '../../components/Seller/Dashboard/Menu'
import { Header } from '../../components/Seller/Dashboard/Header';
import { Body } from '../../components/Seller/Dashboard/Body';


export const Dashboard = () => {
    return (
        <div className="flex flex-row">
            <div className="color-light-bg p-6 max-w-max flex flex-col space-y-5 h-screen sticky top-0 overflow-y-auto sticky max-h-screen min-w-min">
                <Logo />
                <Menu />
            </div>
            <div className="flex-grow w-full px-6 pt-6">
                <Header />
                <Body />
            </div>
            <div className="color-light-bg p-6 max-w-max flex flex-col space-y-5 h-screen sticky top-0 overflow-y-auto sticky max-h-screen">
                <Logo />
                <Menu />
            </div>
        </div>
    )
}
