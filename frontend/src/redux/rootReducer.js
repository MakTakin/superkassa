import { FETCH_FAILED, FETCH_LOADING, FETCH_SUCCESS } from './action-type';

const initiallState = {
    status: 'OFF',
    loading: false,
    error: ''
}

export const rootReducer = (state = initiallState, action) => {
    console.log(action.payload)
    switch (action.type) {
        case FETCH_LOADING:
            return {
                ...state,
                loading: true
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                status: action.payload[0].value,
                loading: false
            }
        case FETCH_FAILED:
            return {
                ...state,
                error: action.payload.error,
                loading: false
            }

        default:
            return state
    }
}