import {v1} from 'uuid'
import {ActionsTypes, PostType, ProfilePageType} from './store'

export const ADD_POST = 'sn-typescript/ProfilePage/ADD-POST'
export const ADD_CURRENT_VALUE = 'sn-typescript/ProfilePage/ADD-CURRENT-VALUE'

export type AddPostActionType = ReturnType<typeof addPostAC>
export type AddCurrentValueActionType = ReturnType<typeof addCurrentValueAC>

const profileReducer = (state: ProfilePageType, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostType
            newPost = {
                id: v1(),
                message: state.textareaCurrentValue.trim(),
                likes: 7
            }

            if (newPost.message) {
                state.messagesData.push(newPost)
            }

            state.textareaCurrentValue = ''
            return state
        case ADD_CURRENT_VALUE:
            state.textareaCurrentValue = action.newText
            return state
        default:
            return state
    }
}

export const addPostAC = () => ({type: ADD_POST} as const)
export const addCurrentValueAC = (text: string) => ({type: ADD_CURRENT_VALUE, newText: text} as const)

export default profileReducer