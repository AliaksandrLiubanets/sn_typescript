import profileReducer, {
    ADD_CURRENT_VALUE,
    addCurrentValueAC,
    addPostAC, ContactsType, deletePostAC,
    ProfilePageType, ProfileType, setStatusProfileAC,
    setUserProfileAC
} from './profile-reducer'
import {v1} from 'uuid'

let state: ProfilePageType
const postId_1 = v1()
const postId_2 = v1()
const postId_3 = v1()

beforeEach(() => {
    state = {
        textareaCurrentValue: 'message',
        messagesData: [
            {id: postId_1, message: 'hello!', likes: 3},
            {id: postId_2, message: 'Hi!', likes: 5},
            {id: postId_3, message: 'How is it going?!', likes: 8}
        ],
        profile: null,
        status: null,
    }
})

test('Add post', () => {

    const action = addPostAC()
    const result = profileReducer(state, action)

    expect(result.messagesData.length).toBe(4)
    expect(result.messagesData[3].message).toBe('message')
})

test('Add current value to state', () => {

    const action = addCurrentValueAC('IT-kamasutra')
    const result = profileReducer(state, action)
    const result2 = profileReducer(state, {type: ADD_CURRENT_VALUE, newText: ""})

    expect(result.textareaCurrentValue).toBe("IT-kamasutra")
    expect(result2.textareaCurrentValue).toBe("")
})

test('Set user profile to state', () => {

    const profile: ProfileType = {
        userId: 1,
        lookingForAJob: "I look for a job",
        lookingForAJobDescription: 'Frontend developer',
        fullName: 'Bob',
        contacts: {} as ContactsType,
        photos: {
            small: '',
            large: ''
        }
    }

    const action = setUserProfileAC(profile)
    const result = profileReducer(state, action)

    expect(result.profile).toBeDefined()
    expect(result.profile?.fullName).toBe("Bob")

})

test('Set profile status', () => {

    const action = setStatusProfileAC('alone')
    const result = profileReducer(state, action)

    expect(result.status).toBe("alone")

})

test('Delete post', () => {

    const action = deletePostAC(postId_2)
    const result = profileReducer(state, action)

    expect(result.messagesData.length).toBe(2)
    expect(result.messagesData.find(post => post.id === postId_2)).toBeUndefined()
})