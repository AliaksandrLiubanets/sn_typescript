import React from 'react'
import {Form, Formik} from 'formik'
import {TextInput} from '../FormikFields/TextInput'
import {Checkbox} from '../FormikFields/Checkbox'
import {useDispatch} from 'react-redux'
import {login} from '../Redux/auth-reducer'
import {validateEmail, validatePassword} from '../FormikFields/validation'

export const LoginFormik = () => {

    const dispatch = useDispatch()

    return (
        <>
            <h1>LOGIN!</h1>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    rememberMe: false, // added for our checkbox
                    captcha: true // default value captcha
                }}
                onSubmit={(values) => {
                    dispatch(login(values))
                }}
            >

                    <Form>
                        <TextInput
                            labelName="Email"
                            name="email"
                            type="email"
                            placeholder="enter email"
                            validate={validateEmail}
                        />

                        <TextInput
                            labelName="Password"
                            name="password"
                            type="password"
                            placeholder="enter password"
                            validate={validatePassword}
                        />

                        <Checkbox name="rememberMe" labelName="remember me"/>

                        <button type="submit">Submit</button>
                    </Form>

            </Formik>
        </>
    )
}
