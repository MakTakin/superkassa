import {BTN_CHANGE} from "./action-type";


export const togleStateProps = (state) => {
    return {
        type: BTN_CHANGE,
        payload: state
    }

}