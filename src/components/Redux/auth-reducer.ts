
export const ADD_POST = 'sn-typescript/ProfilePage/ADD-POST'

type AuthStateType = {
    id: string | null
    email: string | null
    login: string | null
}

const initialState: AuthStateType = {
    id: null,
    email: null,
    login: null,
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