import {AppThunk, InferActionTypes} from './redux-store'
import {chatAPI, ChatMessageAPIType, StatusType} from '../../api/chat-api'
import {Dispatch} from 'redux'
import {v1} from 'uuid'


export const MESSAGES_RECEIVED = 'sn-typescript/Chat/MESSAGES_RECEIVED'
export const STATUS_CHANGED = 'sn-typescript/Chat/STATUS_CHANGED'

const initialState = {
    messages: [] as ChatMessageType[],
    status: 'pending' as StatusType
}

const chatReducer = (state: StateType = initialState, action: ChatActionsType): StateType => {
    switch (action.type) {
        case MESSAGES_RECEIVED:
            return {...state, messages: [...action.payload.messages]
                    .map(m => ({...m, id: v1()}) )
                    .filter((m, index, array) => index >= array.length - 100) // leave only last 100 messages in chat
            }
        case STATUS_CHANGED:
            return {...state, status: action.payload.status}
        default:
            return state
    }
}

export default chatReducer

// actions:
export const chatActions = {
    messagesReceived: (messages: ChatMessageAPIType[]) => ({type: MESSAGES_RECEIVED, payload: {messages}} as const),
    statusChanged: (status: StatusType) => ({type: STATUS_CHANGED, payload: {status}} as const),
}

// thunks:

let _newMessageHandler: ((messages: ChatMessageAPIType[]) => void) | null = null
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
export type ChatMessageType = ChatMessageAPIType & {id: string}

type StateType = typeof initialState
export type ChatActionsType = InferActionTypes<typeof chatActions>


