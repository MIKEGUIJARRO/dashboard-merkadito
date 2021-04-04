import React from 'react'
import { Logo } from '../../components/Seller/Dashboard/Logo'
import { Menu } from '../../components/Seller/Dashboard/Menu'
import { Header } from '../../components/Seller/Dashboard/Header';


export const Dashboard = () => {
    return (
        <div className="flex flex-row h-screen">
            <div className="color-light-bg p-6 max-w-max w-full flex flex-col space-y-5">
                <Logo />
                <Menu />
            </div>
            <div className="flex-grow w-full p-6">
                <Header />
            </div>
            <div className="color-light-bg p-4 max-w-xs	w-full	">more content</div>
        </div>
    )
}
