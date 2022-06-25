import {v1} from 'uuid'
import ava_me from '../../assets/empty_avatar.jpg'
import ava_dimych from '../../assets/ava_100px/ava_dimych.jpg'
import ava_andrew from '../../assets/ava_100px/ava_andrew.jpg'
import ava_lenin from '../../assets/ava_100px/ava_lenin.png'
import ava_pushkin from '../../assets/ava_100px/ava_pushkin.jpg'
import ava_dragunsky from '../../assets/ava_100px/ava_dragunsky.jpg'
import ava_ostrovsky from '../../assets/ava_100px/ava_ostrovskiy.jpg'
import {AppThunk, InferActionTypes} from './redux-store'
import {profileActions} from './profile-reducer'

const ADD_POST_DIALOG = 'sn-typescript/DialogsPage/ADD-POST-DIALOG'
const DELETE_POST_DIALOG = 'sn-typescript/DialogsPage/DELETE-POST-DIALOG'
const SET_CURRENT_VALUE_DIALOG = 'sn-typescript/DialogsPage/ADD-CURRENT-VALUE-DIALOG'
const SET_OWNER_AVATAR = 'sn-typescript/DialogsPage/SET-OWNER-AVATAR'

const initialState: DialogsPageType = {
    messages: {
        dimych: [
            {id: v1(), text: 'Hello!', author: 'Dimych', url: ava_dimych},
            {id: v1(), text: 'How is your profile on LinkedIn?', author: 'Me', url: ava_me},
            {id: v1(), text: 'One more request!', author: 'Dimych', url: ava_dimych}
        ],
        andrew: [
            {id: v1(), text: 'Hi, Andrew!', author: 'Me', url: ava_me},
            {id: v1(), text: 'Hi! Do you have a wife?', author: 'Andrew', url: ava_andrew},
            {id: v1(), text: 'Yes!', author: 'Me', url: ava_me}
        ],
        lenin: [
            {id: v1(), text: 'Good morning, mr. Lenin!', author: 'Me', url: ava_me},
            {id: v1(), text: 'Hi proletariy?', author: 'Lenin', url: ava_lenin},
            {id: v1(), text: 'Do you glad that made october revolution?', author: 'Me', url: ava_me}
        ],
        pushkin: [
            {id: v1(), text: 'Hello, my dear friend', author: 'Pushkin', url: ava_pushkin},
            {id: v1(), text: 'Good evening, Aleksandr Sergeevich!', author: 'Me', url: ava_me},
            {
                id: v1(),
                text: 'Old man and old woman lived for a long time on the shore of the blue sea... Do you remember this fairy tale? ',
                author: 'Pushkin',
                url: ava_pushkin
            }
        ],
        dragunsky: [
            {id: v1(), text: 'Hi, Sasha!', author: 'Dragunsky', url: ava_dragunsky},
            {id: v1(), text: 'How is your profile on LinkedIn?', author: 'Me', url: ava_me},
            {
                id: v1(),
                text: 'What is the most funny story of "Deniskiny rasskazy"?',
                author: 'Dragunsky',
                url: ava_dragunsky
            }
        ],
        ostrovskiy: [
            {id: v1(), text: 'What\'s your name!', author: 'Ostrovskiy', url: ava_ostrovsky},
            {id: v1(), text: 'Aleksander', author: 'Me', url: ava_me},
            {
                id: v1(),
                text: 'So, how do you think? How can steel be hardened?',
                author: 'Ostrovskiy',
                url: ava_ostrovsky
            }
        ]
    },
    dialogs: [
        {id: v1(), author: 'Dimych', url: ava_dimych},
        {id: v1(), author: 'Andrew', url: ava_andrew},
        {id: v1(), author: 'Lenin', url: ava_lenin},
        {id: v1(), author: 'Pushkin', url: ava_pushkin},
        {id: v1(), author: 'Dragunsky', url: ava_dragunsky},
        {id: v1(), author: 'Ostrovskiy', url: ava_ostrovsky}
    ],
    ownAvatar: null
}

export const dialogsReducer = (state = initialState, action: DialogsActionsType): DialogsPageType => {
    switch (action.type) {
        case ADD_POST_DIALOG:
            let newPost: MessageType
            newPost = {
                id: v1(),
                text: action.text.trim(),
                author: 'Me',
                url: state.ownAvatar as string
            }
            if (newPost.text) {
                return {
                    ...state,
                    messages: {
                        ...state.messages,
                        [action.name ? action.name.toLowerCase() : '']: [...state.messages[action.name ? action.name.toLowerCase() : ''], newPost]
                    }
                }
            }
            return state
        case SET_OWNER_AVATAR:
            let valuesArr: Array<MessageType[]> = Object.values(state.messages)
            valuesArr.forEach((arr: MessageType[]) => arr.forEach((m: MessageType) => {
                    if (m.author === 'Me') m.url = action.ava
                }
            ))
            const stateCopy = {...state, ownAvatar: action.ava, messages: {...state.messages}}
            Object.keys(state.messages).forEach(name => {
                stateCopy.messages[name] = [...state.messages[name]]
            })
            return stateCopy
        default:
            return state
    }
}

export default dialogsReducer

// actions:
export const dialogsActions = {
    addDialogMessage: (text: string, name?: string): AddDialogMessageAT => ({type: ADD_POST_DIALOG, text, name}),
    setCurrentValueDialog: (text: string): AddCurrentValueDialogAT => ({
        type: SET_CURRENT_VALUE_DIALOG,
        newText: text
    }),
    setOwnerAvatar: (ava: string): setOwnerAvatarAT => ({type: SET_OWNER_AVATAR, ava})
}

export const setDialogsAvatar = (): AppThunk => async (dispatch, getState) => {
    const avatar = getState().auth.ownAvatar as string
    dispatch(dialogsActions.setOwnerAvatar(avatar))
}

// types:
export type setOwnerAvatarAT = {
    type: typeof SET_OWNER_AVATAR
    ava: string
}
export type AddDialogMessageAT = {
    type: typeof ADD_POST_DIALOG
    name?: string
    text: string
}
export type AddCurrentValueDialogAT = {
    type: typeof SET_CURRENT_VALUE_DIALOG
    newText: string
}
export type DeletePostDialogActionType = {
    type: typeof DELETE_POST_DIALOG
    name: string
    postId: string
}
export type DialogType = {
    id: string
    author: string
    url: string
}
export type MessageType = {
    id: string
    text: string
    author: string
    url: string
}
export type DialogsPageMessagesType = {
    [key: string]: Array<MessageType>
}
export type DialogsPageType = {
    messages: DialogsPageMessagesType
    dialogs: Array<DialogType>
    ownAvatar: string | null
}
export type DialogsActionsType = InferActionTypes<typeof dialogsActions | Pick<typeof profileActions, 'updateProfilePhoto'>>