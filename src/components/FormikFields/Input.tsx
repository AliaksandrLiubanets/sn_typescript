import {FC} from 'react'
import s from './FormikFields.module.css'

type InputType = {
    labelName: string
    name: string
    type: string
    placeholder: string
}

export const Input: FC<InputType> = ({
                                         // field,
                                         type,
                                         name,
                                         labelName,
                                         placeholder
                                     }) => {
    return <div>
        <label className={s.input_label}>
            <input
                //{...field}
                name={name}
                className={s.input_style}
                type={type}
                placeholder={placeholder}
            />
            <span className="">{labelName}</span>
        </label>
    </div>
}