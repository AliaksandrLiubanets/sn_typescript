import {useDispatch} from 'react-redux'
import {login, LoginPayloadType} from '../Redux/auth-reducer'
import {Field, Form, Formik, FormikHelpers} from 'formik'
import {Checkbox} from '../FormikFields/Checkbox'
import {Input} from '../FormikFields/Input'

export const LoginCheckebox: React.FC<{}> = () => {

    const dispatch = useDispatch()

    const initialValues: LoginPayloadType = {
        email: '',
        password: '',
        rememberMe: true,
        captcha: true
    }

    return (
        <div>
            <h1>LOGIN Formik</h1>
            <Formik
                initialValues={initialValues}
                // onSubmit={(values, actions) => {
                //     dispatch(login(values))
                // }}
                onSubmit={(
                    values: LoginPayloadType,
                    {setSubmitting}: FormikHelpers<LoginPayloadType>

                ) => {
                    console.log(values)
                    setSubmitting(false)
                    // dispatch(login(values))
                }}

            >
                <Form>
                    <Field
                        labelName={'Email'}
                        name={'email'}
                        type={'text'}
                        placeholder={'enter email'}
                        component={Input}
                    />

                    <Field
                        labelName={'Password'}
                        name={'password'}
                        type={'password'}
                        placeholder={'enter password'}
                        component={Input}
                    />

                    <Field
                        labelName={'remember'}
                        name={'rememberMe'}
                        type={'checkbox'}
                        component={Checkbox}
                    />

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}