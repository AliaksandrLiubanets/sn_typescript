import authReducer, {authActions, AuthDataType, AuthStateType} from './auth-reducer'

let state: AuthStateType

beforeEach(() => {
    state = {
        data: {
            id: null,
            email: null,
            login: null
        },
        isAuth: false,
        ownAvatar: '',
    }
})

test('Set authorize data to state', () => {

    const authData: AuthDataType = {
        id: 1,
        email: "mail@bk.ru",
        login: "Bubenchik"
    }

    const action = authActions.setAuthData(authData)
    const result = authReducer(state, action)

    expect(result.data).toBeDefined()
    expect(result.data.id).toBe(1)
})

test('Check is user authorised', () => {

    const action = authActions.setIsAuth(true)
    const action2 = authActions.setIsAuth(false)
    const result = authReducer(state, action)
    const result2 = authReducer(state, action2)

    expect(result.isAuth).toBe(true)
    expect(result2.isAuth).toBe(false)
})



