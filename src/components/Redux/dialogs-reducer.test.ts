import {v1} from 'uuid'
import ava_dimych from '../../assets/ava_100px/ava_dimych.jpg'
import ava_me from '../../assets/ava_100px/ava_me.jpg'
import ava_andrew from '../../assets/ava_100px/ava_andrew.jpg'
import ava_lenin from '../../assets/ava_100px/ava_lenin.png'
import ava_pushkin from '../../assets/ava_100px/ava_pushkin.jpg'
import ava_dragunsky from '../../assets/ava_100px/ava_dragunsky.jpg'
import ava_ostrovsky from '../../assets/ava_100px/ava_ostrovskiy.jpg'
import dialogsReducer, {dialogsActions, DialogsPageType} from './dialogs-reducer'

let state: DialogsPageType
let dimychDialogName: string
const postId_1 = v1()
const postId_2 = v1()
const postId_3 = v1()

beforeEach(() => {
    dimychDialogName = 'Dimych'
    state = {
        messages: {
            dimych: [
                {id: postId_1, text: 'Hello!', author: 'Dimych', url: ava_dimych},
                {id: postId_2, text: 'How is your profile on LinkedIn?', author: 'Me', url: ava_me},
                {id: postId_3, text: 'One more request!', author: 'Dimych', url: ava_dimych}
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
                {id: v1(), text: 'Old man and old woman lived for a long time on the shore of the blue sea... Do you remember this fairy tale? ', author: 'Pushkin', url: ava_pushkin}
            ],
            dragunsky: [
                {id: v1(), text: 'Hi, Sasha!', author: 'Dragunsky', url: ava_dragunsky},
                {id: v1(), text: 'How is your profile on LinkedIn?', author: 'Me', url: ava_me},
                {id: v1(), text: 'What is the most funny story of "Deniskiny rasskazy"?', author: 'Dragunsky', url: ava_dragunsky}
            ],
            ostrovskiy: [
                {id: v1(), text: 'What\'s your dimychDialogName!', author: 'Ostrovskiy', url: ava_ostrovsky},
                {id: v1(), text: 'Aleksander', author: 'Me', url: ava_me},
                {id: v1(), text: 'So, how do you think? How can steel be hardened?', author: 'Ostrovskiy', url: ava_ostrovsky}
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
})

test('Add Dialog post', () => {

    const action = dialogsActions.addDialogMessage('Hello!', dimychDialogName)
    const result = dialogsReducer(state, action)

    expect(result.messages['Dimych'.toLowerCase()].length).toBe(4)
    expect(result.messages['Dimych'.toLowerCase()][3].text).toBe("Hello!")

})



