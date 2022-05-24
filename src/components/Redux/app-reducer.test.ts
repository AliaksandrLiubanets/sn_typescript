import appReducer, {appActions, AppStateType} from './app-reducer'

let state: AppStateType

beforeEach(() => {
    state = {
        isInitializing: false,
        errorArray: [] as string[],
        isLoading: false
    }
})

test('initialize app', () => {
    const action = appActions.setInitialize(true)
    const result = appReducer(state, action)

    expect(result.isInitializing).toBeTruthy()

    const action2 = appActions.setInitialize(false)
    const result2 = appReducer(state, action2)

    expect(result2.isInitializing).toBeFalsy()
})

test('set loading process', () => {
    const action = appActions.setIsLoading(true)
    const result = appReducer(state, action)

    expect(result.isLoading).toBeTruthy()

    const action2 = appActions.setIsLoading(false)
    const result2 = appReducer(state, action2)

    expect(result2.isInitializing).toBeFalsy()
})

test('set error message to app state', () => {
    const action = appActions.setAppError(['error'])
    const result = appReducer(state, action)

    expect(result.errorArray).toStrictEqual(['error'])
})