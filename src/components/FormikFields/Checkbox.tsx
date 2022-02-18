import React from 'react'
import s from './FormikFields.module.css'
import {useField} from 'formik'

type CheckboxType = {
    labelName: string
    name: string
}

export const Checkbox = ({ labelName, ...props }: CheckboxType) => {
    const [field, meta] = useField({ ...props, type: "checkbox" });
    return (
        <>
            <label className={s.checkbox_label}>
                <input {...field} {...props} type="checkbox" />
                {labelName}
            </label>
            {meta.touched && meta.error ? (
                <div className={s.error_message}>{meta.error}</div>
            ) : null}
        </>
    );
};