
export const IS_AUTH = 'sn-typescript/Authorize/IS-AUTH'

type AuthDataType = {
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
    isAuth: false,
}

const authReducer = (state: AuthStateType = initialState, action: AuthActionsType): AuthStateType => {
    switch (action.type) {
        case IS_AUTH:
            return {...state, data: action.data}

        default:
            return state
    }
}

export type AuthType = ReturnType<typeof checkIsAuthorized>

export type AuthActionsType = AuthType

export const checkIsAuthorized = (data: AuthDataType) => ({type: IS_AUTH, data} as const)

export default authReducer