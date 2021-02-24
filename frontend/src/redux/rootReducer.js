import { STATUS_TOGGLE, FETCH_FAILED, FETCH_LOADING, FETCH_SUCCESS } from './action-type';

const initiallState = {
    status: 'OFF',
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

        case STATUS_TOGGLE:
            return {
                ...state,
                status: action.payload,
                loading: false
            }

        default:
            return state
    }
}