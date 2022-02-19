import React from 'react'
import s from './FormikFields.module.css'
import {useField} from 'formik'

type CheckboxType = {
    labelName: string
    name: string
}

export const Checkbox = ({labelName, ...props}: CheckboxType) => {
    const [field, meta] = useField({...props, type: 'checkbox'})
    return (
        <div className={s.checkbox_block}>

            <input className={s.checkbox_input}{...field} {...props} type="checkbox"/>

            <label htmlFor={props.name}>{labelName}</label>
            {
                meta.touched && meta.error
                    ? (<div className={s.error_message}>{meta.error}</div>)
                    : null
            }
        </div>
    )
}