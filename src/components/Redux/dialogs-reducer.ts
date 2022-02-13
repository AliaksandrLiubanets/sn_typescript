import {v1} from 'uuid'
import ava_me from '../../assets/ava_me.jpg'
import ava_dimych from '../../assets/ava_100px/ava_dimych.jpg'
import ava_andrew from '../../assets/ava_100px/ava_andrew.jpg'
import ava_lenin from '../../assets/ava_100px/ava_lenin.png'
import ava_pushkin from '../../assets/ava_100px/ava_pushkin.jpg'
import ava_dragunsky from '../../assets/ava_100px/ava_dragunsky.jpg'
import ava_ostrovsky from '../../assets/ava_100px/ava_ostrovskiy.jpg'

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

export type DialogsPageActionsType = AddPostDialogActionType | AddCurrentValueDialogActionType

export type DialogType = {
    id: string
    name: string
    ava: string
}

export type MessageType = {
    id: string
    message: string
    name: string
    ava: string
}

export type DialogsPageMessagesType = {
    [key: string]: Array<MessageType>
}

export type DialogsPageType = {
    textareaCurrentValue: string
    messages: DialogsPageMessagesType
    dialogs: Array<DialogType>
}

const initialState: DialogsPageType = {
    textareaCurrentValue: '',
    messages: {
        dimych: [
            {id: v1(), message: 'Hello!', name: 'Dimych', ava: ava_dimych},
            {id: v1(), message: 'How is your profile on LinkedIn?', name: 'Me', ava: ava_me},
            {id: v1(), message: 'One more request!', name: 'Dimych', ava: ava_dimych}
        ],
        andrew: [
            {id: v1(), message: 'Hi, Andrew!', name: 'Me', ava: ava_me},
            {id: v1(), message: 'Hi! Do you have a wife?', name: 'Andrew', ava: ava_andrew},
            {id: v1(), message: 'Yes!', name: 'Me', ava: ava_me}
        ],
        lenin: [
            {id: v1(), message: 'Good morning, mr. Lenin!', name: 'Me', ava: ava_me},
            {id: v1(), message: 'Hi proletariy?', name: 'Lenin', ava: ava_lenin},
            {id: v1(), message: 'Do you glad that made october revolution?', name: 'Me', ava: ava_me}
        ],
        pushkin: [
            {id: v1(), message: 'Hello, my dear friend', name: 'Pushkin', ava: ava_pushkin},
            {id: v1(), message: 'Good evening, Aleksandr Sergeevich!', name: 'Me', ava: ava_me},
            {id: v1(), message: 'Old man and old woman lived for a long time on the shore of the blue sea... Do you remember this fairy tale? ', name: 'Pushkin', ava: ava_pushkin}
        ],
        dragunsky: [
            {id: v1(), message: 'Hi, Sasha!', name: 'Dragunsky', ava: ava_dragunsky},
            {id: v1(), message: 'How is your profile on LinkedIn?', name: 'Me', ava: ava_me},
            {id: v1(), message: 'What is the most funny story of "Deniskiny rasskazy"?', name: 'Dragunsky', ava: ava_dragunsky}
        ],
        ostrovskiy: [
            {id: v1(), message: 'What\'s your name!', name: 'Ostrovskiy', ava: ava_ostrovsky},
            {id: v1(), message: 'Aleksander', name: 'Me', ava: ava_me},
            {id: v1(), message: 'So, how do you think? How can steel be hardened?', name: 'Ostrovskiy', ava: ava_ostrovsky}
        ]
    },
    dialogs: [
        {id: v1(), name: 'Dimych', ava: ava_dimych},
        {id: v1(), name: 'Andrew', ava: ava_andrew},
        {id: v1(), name: 'Lenin', ava: ava_lenin},
        {id: v1(), name: 'Pushkin', ava: ava_pushkin},
        {id: v1(), name: 'Dragunsky', ava: ava_dragunsky},
        {id: v1(), name: 'Ostrovskiy', ava: ava_ostrovsky}
    ]
}

const dialogsReducer = (state = initialState, action: DialogsPageActionsType): DialogsPageType => {
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
                    return {
                        ...state,
                        textareaCurrentValue: '',
                        messages: {...state.messages, [action.name.toLowerCase()]: [...state.messages[action.name.toLowerCase()], newPost]}
                    }
                }
            return state

        case ADD_CURRENT_VALUE_DIALOG:
            return {...state, textareaCurrentValue: action.newText}
        default:
            return state
    }
}

export const addPostDialogAC = (name: string): AddPostDialogActionType => ({type: ADD_POST_DIALOG, name})
export const addCurrentValueDialogAC = (text: string): AddCurrentValueDialogActionType => ({type: ADD_CURRENT_VALUE_DIALOG, newText: text})

export default dialogsReducer