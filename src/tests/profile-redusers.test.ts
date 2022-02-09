import profileReducer, {
    addCurrentValue,
    addPost,
    initialState,
    ProfilePageType
} from '../components/Redux/profile-reducer'

let state: ProfilePageType

beforeEach(() => {
    state = initialState
})

test('should add post', () => {

    const state2: ProfilePageType = {
        ...initialState,
        textareaCurrentValue: 'Hello friend!',
    }

    const action = addPost()
    const changedState2 = profileReducer(state2, action)
    const changedState = profileReducer(state, action)

    expect(changedState2.messagesData[3]).toBeDefined()
    expect(changedState2.messagesData.length).toBe(4)
    expect(changedState2.textareaCurrentValue).toBe('')
    expect(changedState.messagesData.length).toBe(3)
    expect(changedState.messagesData[3]).toBeUndefined()
})
test('should add current value to state', () => {

    const action = addCurrentValue('Text-value')
    const changedState = profileReducer(state, action)

    expect(changedState.textareaCurrentValue).toBe('Text-value')
})

