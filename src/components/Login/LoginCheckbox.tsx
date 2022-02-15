import {useDispatch} from 'react-redux'
import {login, LoginPayloadType} from '../Redux/auth-reducer'
import {Field, Form, Formik} from 'formik'
import {Checkbox} from '../FormikFields/Checkbox'

export const LoginCheckebox: React.FC<{}> = () => {

    type ValueType = { rememberMe: boolean }

    const initialValues: ValueType = {
        rememberMe: false
    }

    return (
        <div>
            <h1>Checkbox</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                    // dispatch(login(values))
                    console.log({values})
                    alert(JSON.stringify(values, null, 2))
                    // actions.setSubmitting(fa lse)
                }}
            >
                {/*{() => {*/}
                    <Form>
                        <label>
                            <Field type="checkbox" name="rememberMe"/>
                            remember me
                        </label>

                        <Field
                            name={'rememberMe'}
                            type={'checkbox'}
                            component={Checkbox}
                        />

                        <button type="submit">Submit</button>
                    </Form>
                {/*}}*/}
            </Formik>
        </div>
    )
}