import { useState } from 'react'

export const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState)

    const reset = () => {
        setValues(initialState);
    }

    const handleInputChange = (e) => {
        setValues((prevValues) => {
            return {
                ...prevValues,
                [e.target.name]: e.target.value
            };
        });
    }
    return [values, handleInputChange, reset];
}
