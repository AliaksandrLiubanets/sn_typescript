import {ChangeEvent, useState} from 'react'
import {login, LoginPayloadType} from '../Redux/auth-reducer'
import {useDispatch} from 'react-redux'

export const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isRemember, setIsRemember] = useState(false)
    const [captcha, setCaptcha] = useState('')

    const dispatch = useDispatch()

    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)
    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)
    const onChangeIsRemember = (e: ChangeEvent<HTMLInputElement>) => setIsRemember(e.currentTarget.checked)

    const sendLoginData = () => {
        const payload: LoginPayloadType = {
            email,
            password,
            rememberMe: isRemember,
            captcha
        }
        dispatch(login(payload))

    }

    return <div>
        <form>
            <div>
                <input onChange={onChangeEmail} type="email" name={"email"} value={email}/>
            </div>
            <div>
                <input onChange={onChangePassword} type="password" name={"password"} value={password}/>
            </div>
            <div>
                <input onChange={onChangeIsRemember} type="checkbox" checked={isRemember}/>
                remember me
            </div>
            <div>
                <button onClick={sendLoginData}>Log in</button>
            </div>
        </form>
    </div>
}