import profileReducer, {
    addCurrentValueAC,
    addPostAC,
    PostType,
    ProfilePageType
} from '../components/Redux/profile-reducer'
import {v1} from 'uuid'
import ava_dimych from '../assets/ava_dimych.jpg'
import ava_me from '../assets/ava_me.jpg'
import ava_andrew from '../assets/ava_andrew.jpg'
import ava_lenin from '../assets/ava_lenin.png'
import ava_pushkin from '../assets/ava_pushkin.jpg'
import ava_dragunsky from '../assets/ava_dragunsky.jpg'
import ava_ostrovsky from '../assets/ava_ostrovskiy.jpg'
import dialogsReducer, {addPostDialogAC, DialogsPageType} from '../components/Redux/dialogs-reducer'

let state: DialogsPageType

beforeEach(() => {
    state = {
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
})

test("should add dialog's post", () => {

    const state2: DialogsPageType = state = {
        textareaCurrentValue: 'New post text',
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

    const name = 'lenin'

    const action = addPostDialogAC(name)
    const changedState2 = dialogsReducer(state2, action)
    const changedState = dialogsReducer(state, action)

    expect(changedState2.messages[name].length).toBe(4)
    expect(changedState2.messages[name][3].message).toBe('New post text')
    expect(changedState.messages[name][3].message).toBe('New post text')

})

