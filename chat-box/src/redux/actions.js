import { ADD_CHAT } from './constants'

export const addChat = (data) => {
    return {
        type : ADD_CHAT,
        payload : data
    }
}