export const SET_IS_INITIALIZE = 'sn-typescript/Authorize/SET-IS-INITIALIZE'

type StateType = typeof initialState

const initialState = {
    isInitialized: false,
}

const appReducer = (state: StateType = initialState, action: ActionsType): StateType => {
    switch (action.type) {
        case 'sn-typescript/Authorize/SET-IS-INITIALIZE':
            return {...state, isInitialized: action.isInitialized }
        default:
            return state
    }
}


export const setIsInitialAC = (isInitialized: boolean) => ({type: SET_IS_INITIALIZE, isInitialized} as const)

export type SetIsInitializeType = ReturnType<typeof setIsInitialAC>
export type ActionsType = SetIsInitializeType





export default appReducer