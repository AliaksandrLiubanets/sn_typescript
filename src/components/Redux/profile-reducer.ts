import {v1} from 'uuid'

export const ADD_POST = 'sn-typescript/ProfilePage/ADD-POST'
export const ADD_CURRENT_VALUE = 'sn-typescript/ProfilePage/ADD-CURRENT-VALUE'
export const SET_USER_PROFILE = 'sn-typescript/ProfilePage/SET-USER-PROFILE'

export type PostType = {
    id: string
    message: string
    likes: number
}

export type ProfileType = {
    userId: string
    lookingForAJob: string
    lookingForAJobDescription: string
    fullName: string
    contacts: string
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
    photos: {
        small: string | null
        large: string | null
    }
}

export type ProfilePageType = {
    textareaCurrentValue: string
    messagesData: Array<PostType>
    profile: ProfileType | null
}

const initialState: ProfilePageType = {
    textareaCurrentValue: '',
    messagesData: [
        {id: v1(), message: 'hello!', likes: 3},
        {id: v1(), message: 'Hi!', likes: 5},
        {id: v1(), message: 'How is it going?!', likes: 8}
    ],
    profile: null
}

const profileReducer = (state = initialState, action: ProfilePageActionsType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostType
            newPost = {
                id: v1(),
                message: state.textareaCurrentValue.trim(),
                likes: 7
            }

            if (newPost.message) {
                return {
                    ...state,
                    textareaCurrentValue: '',
                    messagesData: [...state.messagesData, newPost]
                }
            }

            return state
        case ADD_CURRENT_VALUE:
            return {...state, textareaCurrentValue: action.newText}
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        default:
            return state
    }
}

export type AddPostActionType = ReturnType<typeof addPost>
export type AddCurrentValueActionType = ReturnType<typeof addCurrentValue>
export type SetUserProfileActionType = ReturnType<typeof setUserProfile>

export type ProfilePageActionsType = AddPostActionType | AddCurrentValueActionType | SetUserProfileActionType

export const addPost = () => ({type: ADD_POST} as const)
export const addCurrentValue = (text: string) => ({type: ADD_CURRENT_VALUE, newText: text} as const)
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const)

export default profileReducer