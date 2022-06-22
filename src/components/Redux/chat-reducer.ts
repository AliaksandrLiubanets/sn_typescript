import {AppThunk, InferActionTypes} from './redux-store'
import {chatAPI, ChatMessageType, StatusType} from '../../api/chat-api'
import {Dispatch} from 'redux'


export const MESSAGES_RECEIVED = 'sn-typescript/Chat/MESSAGES_RECEIVED'
export const STATUS_CHANGED = 'sn-typescript/Chat/STATUS_CHANGED'

const initialState = {
    messages: [] as ChatMessageType[],
    status: 'pending' as StatusType
}

const chatReducer = (state: StateType = initialState, action: ChatActionsType): StateType => {
    switch (action.type) {
        case MESSAGES_RECEIVED:
            return {...state, messages: [...state.messages, ...action.payload.messages]}
        case STATUS_CHANGED:
            return {...state, status: action.payload.status}
        default:
            return state
    }
}

export default chatReducer

// actions:
export const chatActions = {
    messagesReceived: (messages: ChatMessageType[]) => ({type: MESSAGES_RECEIVED, payload: {messages}} as const),
    statusChanged: (status: StatusType) => ({type: STATUS_CHANGED, payload: {status}} as const),
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

let _statusChangedHandler: ((status: StatusType) => void) | null = null
 const statusChangedHandlerCreator = (dispatch: Dispatch) => {
    if(_statusChangedHandler === null) {
        _statusChangedHandler = (status) => {
            dispatch(chatActions.statusChanged(status))
        }
    }

    return _statusChangedHandler
}

export const startMessagesListening = (): AppThunk => async (dispatch) => {
    chatAPI.start()
    chatAPI.subscribe('messages-received', newMessageHandlerCreator(dispatch))
    chatAPI.subscribe('status-changed', statusChangedHandlerCreator(dispatch))
}
export const stopMessagesListening = (): AppThunk => async (dispatch) => {
    chatAPI.unsubscribe('messages-received', newMessageHandlerCreator(dispatch))
    chatAPI.unsubscribe('status-changed', statusChangedHandlerCreator(dispatch))
}
export const sendMessage = (message: string): AppThunk => async () => {
    chatAPI.sendMessage(message)
}

// types:

type StateType = typeof initialState
export type ChatActionsType = InferActionTypes<typeof chatActions>


