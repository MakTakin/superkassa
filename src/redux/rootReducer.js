import {BTN_CHANGE} from "./action-type";

const initiallState = {
    state: 'OFF'
}

export const rootReducer = (state = initiallState, action) => {
    switch (action.type) {
        case BTN_CHANGE:
            return {
                ...state,
                state: action.payload
            }
        default:
            return state
    }
}