import { STATUS_TOGGLE, FETCH_FAILED, FETCH_LOADING, FETCH_SUCCESS } from '../actions/types';

const initiallState = {
    loading: false,
    error: ''
}

export const rootReducer = (state = initiallState, action) => {
    switch (action.type) {
        case FETCH_LOADING:
            return {
                ...state,
                loading: true
            }

        case FETCH_SUCCESS:
        case STATUS_TOGGLE:
            return {
                ...state,
                status: action.payload,
                loading: false
            }

        case FETCH_FAILED:
            return {
                ...state,
                error: action.payload,
                loading: false
            }

        default:
            return state
    }
}