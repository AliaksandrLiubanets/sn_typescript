import React from 'react'
import {Form, Formik} from 'formik'
import {TextInput} from '../FormikFields/TextInput'
import {Checkbox} from '../FormikFields/Checkbox'
import {useDispatch, useSelector} from 'react-redux'
import {login} from '../Redux/auth-reducer'
import {validateEmail, validatePassword, validateString} from '../FormikFields/validation'
import s from '../FormikFields/FormikFields.module.css'
import {RootStateType} from '../Redux/redux-store'
import p from '../Profile/Profile.module.css'

export const LoginFormik = () => {

    const dispatch = useDispatch()
    const captchaUrl = useSelector<RootStateType, string>(state => state.auth.captchaUrl)

    return (
        <div className={s.login_page}>
            <Formik
                initialValues={{
                    email: 'samurai.react.js@gmail.com',
                    password: '11111111',
                    rememberMe: false,
                    captcha: ''
                }}
                onSubmit={(values) => {
                    dispatch(login(values))
                }}
            >
                <Form className={p.page_block}>
                    <h4>LOGIN</h4>
                    <TextInput
                        labelName={'Email'}
                        name={'email'}
                        type={'email'}
                        placeholder={'samurai.react.js@gmail.com'}
                        validate={validateEmail}
                    />
                    <TextInput
                        labelName={'Password'}
                        name={'password'}
                        type={'password'}
                        placeholder={'11111111'}
                        validate={validatePassword}
                    />
                    <Checkbox name="rememberMe" labelName="remember me"/>
                    {
                        captchaUrl &&
                        <>
                            <div><img src={captchaUrl} alt={'captcha'}/></div>

                            <TextInput
                                labelName={'Enter symbols'}
                                name={'captcha'}
                                validate={validateString}
                            />
                        </>
                    }
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}
