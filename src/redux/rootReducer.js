import {BTN_TOGGLE} from "./action-type";

const initiallState = {
    status: 'OFF'
}

export const rootReducer = (state = initiallState, action) => {
    switch (action.type) {
        case BTN_TOGGLE:
            return {
                ...state,
                status: action.payload
            }
        default:
            return state
    }
}