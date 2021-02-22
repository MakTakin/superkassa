import {BTN_TOGGLE} from "./action-type";

export const toggleStatus = (state) => {
    return {
        type: BTN_TOGGLE,
        payload: state
    }
}