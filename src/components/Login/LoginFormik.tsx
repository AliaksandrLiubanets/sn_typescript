import React from 'react'
import {Form, Formik} from 'formik'
import {TextInput} from '../FormikFields/TextInput'
import {Checkbox} from '../FormikFields/Checkbox'
import {useDispatch} from 'react-redux'
import {login} from '../Redux/auth-reducer'
import {validateEmail, validatePassword} from '../FormikFields/validation'
import s from '../FormikFields/FormikFields.module.css'

export const LoginFormik = () => {

    const dispatch = useDispatch()

    return (
        <div className={s.login_page}>
            <h1>LOGIN</h1>
            <Formik
                initialValues={{
                    email: 'samurai.react.js@gmail.com',
                    password: '11111111',
                    rememberMe: false, // added for our checkbox
                    captcha: true // default value captcha
                }}
                onSubmit={(values) => {
                    dispatch(login(values))
                }}
            >

                    <Form className={s.login_form}>
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

                        <button type="submit">Submit</button>
                    </Form>

            </Formik>
        </div>
    )
}
