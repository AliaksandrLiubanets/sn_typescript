import {v1} from 'uuid'

const ava_dimych = 'https://st.depositphotos.com/3335611/4577/i/950/depositphotos_45773129-stock-photo-samurai.jpg'
const ava_andrew = 'https://disgustingmen.com/wp-content/uploads/2017/06/yasuke-vladimir-samoilov-art.jpg'
const ava_lenin = 'https://media.istockphoto.com/vectors/samurai-emblem-vector-id531859980'
const ava_pushkin = 'https://chto-eto-takoe.ru/uryaimg/samurai.JPG'
const ava_dragunsky = 'https://e7.pngegg.com/pngimages/941/299/png-clipart-samurai-anime-drawing-samurai-black-hair-chibi.png'
const ava_ostrovsky = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXFDqtEj-fqlEk4YI8fWneqfa2nPyvgl15Yg&usqp=CAU'

export type dialogType = {
    id: string
    name: string
    ava: string
}

export type messageType = {
    id: string
    message: string
    name: string
    ava: string
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
            {id: v1(), message: 'Hello!', name: 'Dimych', ava: ava_dimych},
            {id: v1(), message: 'How is your profile on LinkedIn?', name: 'Me', ava: ava_andrew },
            {id: v1(), message: 'One more request!', name: 'Dimych', ava: ava_dimych}
        ] as Array<messageType>,
        dialogs: [
            {id: v1(), name: 'Dimych', ava: ava_dimych},
            {id: v1(), name: 'Andrew', ava: ava_andrew},
            {id: v1(), name: 'Lenin', ava: ava_lenin},
            {id: v1(), name: 'Pushkin', ava: ava_pushkin},
            {id: v1(), name: 'Dragunsky', ava: ava_dragunsky},
            {id: v1(), name: 'Ostrovskiy', ava: ava_ostrovsky}
        ] as Array<dialogType>
    },
    sidebar: {}
}

export type StateType = typeof state

export default state