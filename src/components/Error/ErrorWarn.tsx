import {useDispatch, useSelector} from 'react-redux'
import {RootStateType} from '../Redux/redux-store'
import {cleanErrorMessages} from '../Redux/app-reducer'
import React, {useCallback, useEffect} from 'react'
import s from './ErrorWarn.module.css'


export const ErrorWarn = () => {

    const errMessage = useSelector<RootStateType, string>(state => state.app.errorMessage)
    const dispatch = useDispatch()
    const cleanErrorMessage = useCallback(() => dispatch(cleanErrorMessages()), [errMessage, dispatch])

    useEffect(() => {
        let id = setTimeout(() => {
            cleanErrorMessage()
        }, 2500)
        return () => {
            clearTimeout(id)
        }
    },[cleanErrorMessage])

    return (errMessage
            ? <div className={s.warning_box}>
                    <div>
                        {errMessage}
                    </div>
                    <div className={s.cross}
                         onClick={cleanErrorMessage}>
                        ⮾
                    </div>
            </div>
            : null
    )
}