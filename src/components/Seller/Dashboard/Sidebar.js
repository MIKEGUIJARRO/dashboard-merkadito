import React from 'react'
import { Save } from 'react-feather';

import { Text } from '../../UI/Button/Text'

export const Sidebar = () => {
    return (
        <div>
            <h4 className="pb-6">Add Item</h4>
            <form className="flex flex-col space-y-2" onClick={() => {

            }}>
                <input type="text" name="name" placeholder="Name" className="px-2 py-1 rounded-lg" />
                <input type="number" name="price" placeholder="$12.00" className="px-2 py-1 rounded-lg" />
                <div>
                    <input type="checkbox" name="status" placeholder="status"
                    />
                    <label for="vehicle1"> status</label>

                </div>
                <input className="max-w-min" type="file" accept="image/*" name="image" placeholder="image" className="px-2 py-1 rounded-lg" />
                <Text logo={<Save />} text="texto" />
            </form>
        </div>
    )
}