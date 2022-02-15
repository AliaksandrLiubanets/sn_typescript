import {FC} from 'react'

type CheckboxType = {
    labelName: string
    name: string
    type: string
}

export const Checkbox: FC<CheckboxType> = ({
                                               // field,
                                               type,
                                               name,
                                               labelName
                                           }) => {
    return <div>
        <label className="s.checkbox_label">
            <input
                //{...field}
                name={name}
                className=""
                type={type}/>
            <span className="">{labelName}</span>
        </label>
    </div>
}