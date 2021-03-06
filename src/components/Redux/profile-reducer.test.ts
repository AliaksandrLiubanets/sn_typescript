import profileReducer, {
    ContactsType,
    profileActions,
    ProfilePageType,
    ProfileType
} from './profile-reducer'
import {v1} from 'uuid'

let state: ProfilePageType
const postId_1 = v1()
const postId_2 = v1()
const postId_3 = v1()

beforeEach(() => {
    state = {
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

    const action = profileActions.addPost('hey')
    const result = profileReducer(state, action)

    expect(result.messagesData.length).toBe(4)
    expect(result.messagesData[0].message).toBe('hey')
})

test('Set user profile to state', () => {

    const profile: ProfileType = {
        userId: 1,
        aboutMe: '',
        lookingForAJob: false,
        lookingForAJobDescription: 'Frontend developer',
        fullName: 'Bob',
        contacts: {} as ContactsType,
        photos: {
            small: '',
            large: ''
        }
    }

    const action = profileActions.setUserProfile(profile)
    const result = profileReducer(state, action)

    expect(result.profile).toBeDefined()
    expect(result.profile?.fullName).toBe("Bob")

})

test('Set profile status', () => {

    const action = profileActions.setStatusProfile('alone')
    const result = profileReducer(state, action)

    expect(result.status).toBe("alone")

})

test('Delete post', () => {

    const action = profileActions.deletePost(postId_2)
    const result = profileReducer(state, action)

    expect(result.messagesData.length).toBe(2)
    expect(result.messagesData.find(post => post.id === postId_2)).toBeUndefined()
})