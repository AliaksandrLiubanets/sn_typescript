
export const SET_AUTH_DATA = 'sn-typescript/Authorize/SET-AUTH-DATA'

export type AuthDataType = {
    id: string | null
    email: string | null
    login: string | null
}

type AuthStateType = {
    data: AuthDataType
    isAuth: boolean
}

const initialState: AuthStateType = {
    data: {
        id: null,
        email: null,
        login: null,
    },
    isAuth: true,
}

const authReducer = (state: AuthStateType = initialState, action: AuthActionsType): AuthStateType => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {...state, data: action.data, isAuth: true}

        default:
            return state
    }
}

export type AuthType = ReturnType<typeof setAuthData>

export type AuthActionsType = AuthType

export const setAuthData = (data: AuthDataType) => ({type: SET_AUTH_DATA, data} as const)

export default authReducer