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

beforeEach(() => {
    dimychDialogName = 'Dimych'
    state = {
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
})

test('Add Dialog post', () => {

    const action = dialogsActions.addDialogMessage('Hello!', dimychDialogName)
    const result = dialogsReducer(state, action)

    expect(result.messages['Dimych'.toLowerCase()].length).toBe(4)
    expect(result.messages['Dimych'.toLowerCase()][3].message).toBe("Hello!")

})



