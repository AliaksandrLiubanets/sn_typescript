import {AppThunk, InferActionTypes} from './redux-store'
import {chatAPI, ChatMessageType} from '../../api/chat-api'
import {Dispatch} from 'redux'


export const MESSAGES_RECEIVED = 'sn-typescript/Chat/MESSAGES_RECEIVED'

const initialState = {
    messages: [] as ChatMessageType[]
}

const chatReducer = (state: StateType = initialState, action: ChatActionsType): StateType => {
    switch (action.type) {
        case MESSAGES_RECEIVED:
            return {...state, messages: [...state.messages, ...action.payload.messages]}
        default:
            return state
    }
}

export default chatReducer

// actions:
export const chatActions = {
    messagesReceived: (messages: ChatMessageType[]) => ({type: MESSAGES_RECEIVED, payload: {messages}} as const),
}

// thunks:

let _newMessageHandler: ((messages: ChatMessageType[]) => void) | null = null

 const newMessageHandlerCreator = (dispatch: Dispatch) => {
    if(_newMessageHandler === null) {
        _newMessageHandler = (messages) => {
            dispatch(chatActions.messagesReceived(messages))
        }
    }

    return _newMessageHandler
}

export const startMessagesListening = (): AppThunk => async (dispatch) => {
    chatAPI.subscribe(newMessageHandlerCreator(dispatch))
}
export const stopMessagesListening = (): AppThunk => async (dispatch) => {
    chatAPI.unsubscribe(newMessageHandlerCreator(dispatch))
}

// types:

type StateType = typeof initialState
export type ChatActionsType = InferActionTypes<typeof chatActions>


