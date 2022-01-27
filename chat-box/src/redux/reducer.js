import { ADD_CHAT } from "./constants"

const initialState = {
    chat: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT:
            return {
                chat:[
                    ...state.chat,
                    { value: action.payload.value, user: action.payload.user }
                ]
            }

        default:
            return state
    }
}
