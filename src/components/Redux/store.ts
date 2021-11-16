import {v1} from 'uuid'

import ava_artem from '../../assets/ava_lenin.png'
import ava_lenin from '../../assets/ava_lenin.png'
import ava_olga from '../../assets/ava_olga.jpg'
import ava_karina from '../../assets/ava_karina.jpg'
import ava_andrew from '../../assets/ava_andrew.jpg'
import ava_pushkin from '../../assets/ava_pushkin.jpg'
import ava_dragunsky from '../../assets/ava_dragunsky.jpg'
import ava_ostrovsky from '../../assets/ava_ostrovskiy.jpg'
import ava_me from '../../assets/ava_me.jpg'
import ava_dimych from '../../assets/ava_dimych.jpg'
import rerenderEntireTree from '../../index'
import profileReducer, {AddCurrentValueActionType, AddPostActionType} from './profile-reducer'
import dialogsReducer, {AddCurrentValueDialogActionType, AddPostDialogActionType} from './dialogs-reducer'
import sidebarReducer from './sidebar-reducer'

export type DialogType = {
    id: string
    name: string
    ava: string
}

export type FriendsType = {
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

export type PostType = {
    id: string
    message: string
    likes: number
}

export type ProfilePageType = {
    textareaCurrentValue: string
    messagesData: Array<PostType>
}

export type DialogsPageType = {
    textareaCurrentValue: string
    messages: DialogsPageMessagesType
    dialogs: Array<DialogType>
}

export type SidebarType = {
    friends: Array<FriendsType>
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

export type ActionsTypes = AddPostActionType | AddCurrentValueActionType | AddPostDialogActionType | AddCurrentValueDialogActionType

export type StoreType = {
    state: StateType
    getState: () => StateType,
    dispatch: (action: ActionsTypes) => void
}


const store: StoreType = {
    state: {
        profilePage: {
            textareaCurrentValue: '',
            messagesData: [
                {id: v1(), message: 'hello!', likes: 3},
                {id: v1(), message: 'Hi!', likes: 5},
                {id: v1(), message: 'How is it going?!', likes: 8}
            ]
        },
        dialogsPage: {
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
        },
        sidebar: {
            friends: [
                {id: v1(), name: 'Lenin', ava: ava_artem},
                {id: v1(), name: 'Olga', ava: ava_olga},
                {id: v1(), name: 'Karina', ava: ava_karina}
            ]
        }
    },

    getState() {
        return this.state
    },

    dispatch(action: ActionsTypes) {

        this.state.profilePage = profileReducer(this.getState().profilePage, action)
        this.state.dialogsPage = dialogsReducer(this.getState().dialogsPage, action)
        this.state.sidebar = sidebarReducer(this.getState().sidebar, action)

        rerenderEntireTree(this)
    }
}

export default store