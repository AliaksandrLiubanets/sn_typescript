import {useDispatch} from 'react-redux'
import {login, LoginPayloadType} from '../Redux/auth-reducer'
import {Field, Form, Formik} from 'formik'

export const LoginFormik: React.FC<{}> = () => {

    const dispatch = useDispatch()

    const initialValues: LoginPayloadType = {
        email: '',
        password: '',
        rememberMe: false,
        captcha: true
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                    dispatch(login(values))
                    // console.log({ values, actions });
                    // alert(JSON.stringify(values, null, 2));
                    // actions.setSubmitting(fa lse)
                }}
            >
                <Form>
                    <label htmlFor="email">First Name</label>
                    <Field id="email" name="email" placeholder="e-mail"/>

                    <label htmlFor="password">First Name</label>
                    <Field id="password" name="password" placeholder="password"/>

                    <label>
                        <Field type="checkbox" name="rememberMe" value="rememberMe"/>
                        remember me
                    </label>

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}