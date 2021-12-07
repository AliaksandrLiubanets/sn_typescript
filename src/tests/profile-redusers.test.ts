import profileReducer, {
    addCurrentValueAC,
    addPostAC,
    PostType,
    ProfilePageType
} from '../components/Redux/profile-reducer'

let state: ProfilePageType

beforeEach(() => {
    state = {
        textareaCurrentValue: '',
        messagesData: [
            {id: '1', message: 'hello!', likes: 3},
            {id: '2', message: 'Hi!', likes: 5},
            {id: '3', message: 'How is it going?!', likes: 8}
        ]
    }
})

test('should add post', () => {

    state = {
        textareaCurrentValue: 'Hello friend!',
        messagesData: [
            {id: '1', message: 'hello!', likes: 3},
            {id: '2', message: 'Hi!', likes: 5},
            {id: '3', message: 'How is it going?!', likes: 8}
        ]
    }

    const action = addPostAC()
    const changedState = profileReducer(state, action)

    expect(changedState.messagesData[3]).toBeDefined()
    expect(changedState.textareaCurrentValue).toBe('')
    expect(changedState.messagesData[3].message).toBe('Hello friend!')
})
test('should add current value to state', () => {

    const action = addCurrentValueAC('Text-value')
    const changedState = profileReducer(state, action)

    expect(changedState.textareaCurrentValue).toBe('Text-value')
})

