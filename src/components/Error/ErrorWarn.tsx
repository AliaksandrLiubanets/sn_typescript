import {useDispatch, useSelector} from 'react-redux'
import {RootStateType} from '../Redux/redux-store'
import {cleanErrorMessages} from '../Redux/app-reducer'
import React, {useCallback, useEffect} from 'react'
import s from './ErrorWarn.module.css'


export const ErrorWarn = () => {

    const errorArray = useSelector<RootStateType, string[]>(state => state.app.errorArray)
    const dispatch = useDispatch()
    const cleanErrorMessage = useCallback(() => dispatch(cleanErrorMessages()), [errorArray, dispatch])

    useEffect(() => {
        let id = setTimeout(() => {
            cleanErrorMessage()
        }, 4500)
        return () => {
            clearTimeout(id)
        }
    }, [cleanErrorMessage])

    const errors = errorArray.map(error => {
        return <div key={error} className={s.warning_box}>
            <div className={s.warning_box__error}>
                {error}
            </div>
            <div className={s.warning_box__cross}
                 onClick={cleanErrorMessage}>
                ⮾
            </div>
        </div>
    })

    return (
        <div className={s.warning_block}>
            {
                errorArray.length > 0
                    ? errors
                    : null
            }
        </div>
    )
}