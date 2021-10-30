import {v1} from 'uuid'

export type dialogType = {
    id: string
    name: string
}

export type messageType = {
    id: string
    message: string
}

export type PostType = {
    id: string
    message: string
    likes: number
}

const state = {
    profilePage: {
        messagesData: [
            {id: v1(), message: 'hello!', likes: 3},
            {id: v1(), message: 'Hi!', likes: 5},
            {id: v1(), message: 'How is it going?!', likes: 8}
        ] as Array<PostType>
    },
    dialogsPage: {
        messages: [
            {id: v1(), message: 'Hello!'},
            {id: v1(), message: 'How is your profile on LinkedIn?'},
            {id: v1(), message: 'One more request!'}
        ] as Array<messageType>,
        dialogs: [
            {id: v1(), name: 'Dimych'},
            {id: v1(), name: 'Andrew'},
            {id: v1(), name: 'Lenin'},
            {id: v1(), name: 'Pushkin'},
            {id: v1(), name: 'Dragunsky'},
            {id: v1(), name: 'Ostrovskiy'}
        ] as Array<dialogType>
    },
    sidebar: {}
}

export type StateType = typeof state

export default state