import {v1} from 'uuid'
import {ActionsTypes, DialogsPageType, MessageType} from './store'
import ava_me from '../../assets/ava_me.jpg'

const ADD_POST_DIALOG = 'sn-typescript/DialogsPage/ADD-POST-DIALOG'
const ADD_CURRENT_VALUE_DIALOG = 'sn-typescript/DialogsPage/ADD-CURRENT-VALUE-DIALOG'

export type AddPostDialogActionType = {
    type: typeof ADD_POST_DIALOG
    name: string
}

export type AddCurrentValueDialogActionType = {
    type: typeof ADD_CURRENT_VALUE_DIALOG
    newText: string
}

const dialogsReducer = (state: DialogsPageType, action: ActionsTypes): DialogsPageType => {
    switch (action.type) {
        case ADD_POST_DIALOG:
                let newPost: MessageType
                newPost = {
                    id: v1(),
                    message: state.textareaCurrentValue.trim(),
                    name: 'Me',
                    ava: ava_me
                }
                if(newPost.message) {
                    state.messages[action.name.toLowerCase()].push(newPost)
                }
                state.textareaCurrentValue = ''
            return state

        case ADD_CURRENT_VALUE_DIALOG:
            state.textareaCurrentValue = action.newText
            return state
        default:
            return state
    }
}

export const addPostDialogAC = (name: string): AddPostDialogActionType => ({type: ADD_POST_DIALOG, name})
export const addCurrentValueDialogAC = (text: string): AddCurrentValueDialogActionType => ({type: ADD_CURRENT_VALUE_DIALOG, newText: text})

export default dialogsReducer