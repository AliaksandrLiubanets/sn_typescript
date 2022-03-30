import authReducer, {AuthDataType, AuthStateType, setAuthDataAC, setIsAuthAC} from './auth-reducer'

let state: AuthStateType

beforeEach(() => {
    state = {
        data: {
            id: null,
            email: null,
            login: null
        },
        isAuth: false
    }
})

test('Set authorize data to state', () => {

    const authData: AuthDataType = {
        id: "1",
        email: "mail@bk.ru",
        login: "Bubenchik"
    }

    const action = setAuthDataAC(authData)
    const result = authReducer(state, action)

    expect(result.data).toBeDefined()
    expect(result.data.id).toBe("1")
})

test('Check is user authorised', () => {

    const action = setIsAuthAC(true)
    const action2 = setIsAuthAC(false)
    const result = authReducer(state, action)
    const result2 = authReducer(state, action2)

    expect(result.isAuth).toBe(true)
    expect(result2.isAuth).toBe(false)
})



