import React from 'react'
import { Logo } from '../../components/Seller/Dashboard/Logo'
import { Menu } from '../../components/Seller/Dashboard/Menu'

export const Dashboard = () => {
    return (
        <div className="flex flex-row space-x-4 h-screen">
            <div className="color-light-bg p-6 max-w-max w-full flex flex-col space-y-5">
                <Logo />
                <Menu />
            </div>
            <div className="flex-grow color-light-bg w-full	">more content</div>
            <div className="color-light-bg p-4 max-w-xs	w-full	">more content</div>
        </div>
    )
}
