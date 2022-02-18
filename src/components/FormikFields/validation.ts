import {LoginPayloadType} from '../Redux/auth-reducer'

export type ErrorValuesType = {
    email?: string
    password?: string
    rememberMe?: string
    captcha?: string
}

export const validate = (values: LoginPayloadType) => {
    const errors: ErrorValuesType = {};

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length > 15) {
        errors.password = 'Must be 15 characters or less';
    }

    return errors;
};

export function validateEmail(value: string) {
    let error
    if (!value) {
        error = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Invalid email address'
    }
    return error
}

export function validatePassword(value: string) {
    let error
    if (!value) {
        error = 'Required'
    } else if (value.length < 5 ) {
        error = 'Password length should be at least 5 symbols'
    }
    return error
}