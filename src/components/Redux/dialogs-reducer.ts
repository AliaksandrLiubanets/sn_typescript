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
            {userId: 2, message: 'Hello!', userName: 'Dimych', photo: ava_dimych},
            {userId: 1, message: 'How is your profile on LinkedIn?', userName: 'Me', photo: ava_me},
            {userId: 1, message: 'One more request!', userName: 'Dimych', photo: ava_dimych}
        ],
        andrew: [
            {userId: 1, message: 'Hi, Andrew!', userName: 'Me', photo: ava_me},
            {userId: 3, message: 'Hi! Do you have a wife?', userName: 'Andrew', photo: ava_andrew},
            {userId: 1, message: 'Yes!', userName: 'Me', photo: ava_me}
        ],
        lenin: [
            {userId: 1, message: 'Good morning, mr. Lenin!', userName: 'Me', photo: ava_me},
            {userId: 4, message: 'Hi proletariy?', userName: 'Lenin', photo: ava_lenin},
            {userId: 1, message: 'Do you glad that made october revolution?', userName: 'Me', photo: ava_me}
        ],
        pushkin: [
            {userId: 5, message: 'Hello, my dear friend', userName: 'Pushkin', photo: ava_pushkin},
            {userId: 1, message: 'Good evening, Aleksandr Sergeevich!', userName: 'Me', photo: ava_me},
            {
                userId: 5,
                message: 'Old man and old woman lived for a long time on the shore of the blue sea... Do you remember this fairy tale? ',
                userName: 'Pushkin',
                photo: ava_pushkin
            }
        ],
        dragunsky: [
            {userId: 6, message: 'Hi, Sasha!', userName: 'Dragunsky', photo: ava_dragunsky},
            {userId: 1, message: 'How is your profile on LinkedIn?', userName: 'Me', photo: ava_me},
            {
                userId: 6,
                message: 'What is the most funny story of "Deniskiny rasskazy"?',
                userName: 'Dragunsky',
                photo: ava_dragunsky
            }
        ],
        ostrovskiy: [
            {userId: 7, message: 'What\'s your name!', userName: 'Ostrovskiy', photo: ava_ostrovsky},
            {userId: 1, message: 'Aleksander', userName: 'Me', photo: ava_me},
            {
                userId: 7,
                message: 'So, how do you think? How can steel be hardened?',
                userName: 'Ostrovskiy',
                photo: ava_ostrovsky
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
                userId: 9,
                message: action.text.trim(),
                userName: 'Me',
                photo: state.ownAvatar as string
            }
            if (newPost.message) {
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
                    if (m.userName === 'Me') m.photo = action.ava
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
    userId: number
    message: string
    userName: string
    photo: string
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