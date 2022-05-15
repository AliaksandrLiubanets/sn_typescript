import React from 'react'
import s from './FormikFields.module.css'
import {Field, useField} from 'formik'

type InputType = {
    labelName?: string
    name: string
    type?: string
    placeholder?: string
    validate: (value: string) => string | undefined
}

export const TextInput = ({labelName, ...props}: InputType) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and alse replace ErrorMessage entirely.

    const [field, meta] = useField(props)

    return <div className={s.input_block}>
        <label htmlFor={props.name}>{labelName}</label>
        <Field className={s.input_style} {...field} {...props} />
        {
            meta.touched && meta.error
            ? (<div className={s.error_message}>{meta.error}</div>)
            : null
        }
    </div>
}