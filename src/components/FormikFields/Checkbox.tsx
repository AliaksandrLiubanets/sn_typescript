import React, {FC} from 'react'
import s from './FormikFields.module.css'
import {useField} from 'formik'

type CheckboxType = {
    labelName: string
    name: string
    type: string
}

// export const Checkbox: FC<CheckboxType> = ({
//                                                // field,
//                                                type,
//                                                name,
//                                                labelName
//                                            }) => {
//     return <div>
//         <label className={s.checkbox_label}>
//             <input
//                 //{...field}
//                 name={name}
//                 className=""
//                 type={type}/>
//             <span className="">{labelName}</span>
//         </label>
//     </div>
// }

export const Checkbox = ({ labelName, ...props }: CheckboxType) => {
    const [field, meta] = useField({ ...props, type: "checkbox" });
    return (
        <>
            <label className={s.checkbox_label}>
                <input {...field} {...props} type="checkbox" />
                {labelName}
            </label>
            {meta.touched && meta.error ? (
                <div className={s.checkbox_error}>{meta.error}</div>
            ) : null}
        </>
    );
};