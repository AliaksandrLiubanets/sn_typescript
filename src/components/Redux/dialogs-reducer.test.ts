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
        textareaCurrentValue: '',
        messages: {
            dimych: [
                {id: postId_1, message: 'Hello!', name: 'Dimych', ava: ava_dimych},
                {id: postId_2, message: 'How is your profile on LinkedIn?', name: 'Me', ava: ava_me},
                {id: postId_3, message: 'One more request!', name: 'Dimych', ava: ava_dimych}
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
                {id: v1(), message: 'What\'s your dimychDialogName!', name: 'Ostrovskiy', ava: ava_ostrovsky},
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
        ],
        ownAvatar: null
    }
})

test('Add Dialog post', () => {

    const newState: DialogsPageType = {...state, textareaCurrentValue: 'Hello!'}

    const action = dialogsActions.addPostDialog(dimychDialogName)
    const result = dialogsReducer(newState, action)

    expect(result.messages['Dimych'.toLowerCase()].length).toBe(4)
    expect(result.messages['Dimych'.toLowerCase()][3].message).toBe("Hello!")
    expect(result.textareaCurrentValue).toBe("")

})

test('Add current value in Dialogs', () => {

    const action = dialogsActions.addCurrentValueDialog('Yo')
    const result = dialogsReducer(state, action)

    expect(result.textareaCurrentValue).toBe("Yo")
})


