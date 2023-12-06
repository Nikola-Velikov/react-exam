import { useState, useEffect } from "react"

export default function useForm(submitHandler, initialValues, isLate) {
    const [values, setValues] = useState(initialValues);
    const [validated, setValidated] = useState(false);


    useEffect(() => {
        setValues(initialValues);
    }, isLate ? [initialValues] : []);

    const onChange = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };
    const onFileChange = (e) => {
       
        setValues(state => ({ 
            ...state,
            [e.target.name]: e.target.files[0]
        }));
        console.log(values);
    }


    const onSubmit = (e) => {
        e.preventDefault();

     
        if (e.currentTarget.checkValidity() === false) {
            setValidated(true);
            return;
        }

        submitHandler(values);

        setValues(initialValues);
    };

    return {
        values,
        onChange,
        onSubmit,
        validated,
        onFileChange
    }
}