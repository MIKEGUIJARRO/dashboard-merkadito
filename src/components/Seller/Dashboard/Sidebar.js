import React, { useState } from 'react'
import "react-toggle/style.css"

import { Save } from 'react-feather';

import { Primary } from '../../UI/Button/Primary';
import { useForm } from '../../../hooks/useForm';

export const Sidebar = () => {

    const [checkbox, setcheckbox] = useState(false);
    const [selectedFile, setselectedFile] = useState(null)

    const [formValues, handleInputChange, handleReset] = useForm({
        name: "",
        price: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formValues[0] === "" || formValues[1] === "" || selectedFile === null) {
            return;
        }

        const form = {
            ...formValues,
            "file": selectedFile,
            "checkbox": checkbox
        };

        console.log(form);
    };

    return (
        <div>
            <h4 className="pb-6">Add Item</h4>
            <form className="flex flex-col space-y-3" onSubmit={handleSubmit} onReset={handleReset}>
                <input required type="text" name="name" placeholder="Name" onChange={handleInputChange} className="px-2 py-1 rounded-lg" />
                <input required type="number" step="any" name="price" placeholder="$12.00" onChange={handleInputChange} className="px-2 py-1 rounded-lg" />
                <input required type="file" accept="image/*" name="image" placeholder="image" onChange={(e) => {
                    setselectedFile(() => e.target.files[0])
                }} />
                <label className="cursor-pointer flex items-center space-x-3" onClick={() => {
                    setcheckbox((prevState) => {
                        return !prevState;
                    })
                }} >
                    <span className="font-semibold">Status</span>
                    {

                        checkbox ?
                            <span className={`self-start select-none rounded-full py-1 px-2 text-xs font-semibold bg-green-300 text-green-700`}>
                                Active
                            </span> :
                            <span className={`self-start select-none rounded-full py-1 px-2 text-xs font-semibold bg-red-300 text-red-700`}>
                                Inactive
                            </span>
                    }
                </label>





                <Primary icon={<Save />} >Save</Primary>
            </form>
        </div >
    )
}