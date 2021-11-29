import {v1} from 'uuid'

export const ADD_POST = 'sn-typescript/ProfilePage/ADD-POST'
export const ADD_CURRENT_VALUE = 'sn-typescript/ProfilePage/ADD-CURRENT-VALUE'

export type AddPostActionType = ReturnType<typeof addPostAC>
export type AddCurrentValueActionType = ReturnType<typeof addCurrentValueAC>

export type ProfilePageActionsType = AddPostActionType | AddCurrentValueActionType

export type PostType = {
    id: string
    message: string
    likes: number
}

export type ProfilePageType = {
    textareaCurrentValue: string
    messagesData: Array<PostType>
}

const initialState: ProfilePageType = {
    textareaCurrentValue: '',
    messagesData: [
        {id: v1(), message: 'hello!', likes: 3},
        {id: v1(), message: 'Hi!', likes: 5},
        {id: v1(), message: 'How is it going?!', likes: 8}
    ]
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