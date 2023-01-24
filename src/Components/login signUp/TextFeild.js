import { ErrorMessage, useField } from 'formik';
import React from 'react';
import './TextFeild.css';

function TextFeild({lable , ...props}) {
    const[feild , meta]= useField(props)
    return (
        <div>
            <lable htmlFor={feild.name}>{lable}</lable>
            <input className={`form-control shadow-none mt-3 p-2 fs-6 pe-3 input text-dark ${meta.touched && meta.error && 'is-invalid'}`}
                {...feild} {...props}
                autoComplete="off" />
            <ErrorMessage component="div" name={feild.name} className="error"/>
        </div>
    )
}

export default TextFeild