import { BTN_TOGGLE, FETCH_FAILED, FETCH_LOADING, FETCH_SUCCESS } from './action-type';

// export const toggleStatus = ( state ) => {
//     return {
//         type: BTN_TOGGLE,
//         payload: state
//     }
// }

export const fetchLoading = () => {
    return {
        type: FETCH_LOADING,
    }
}

export const fetchSuccess = ( status ) => {
    console.log(status)
    return {
        type: FETCH_SUCCESS,
        payload: status
    }
}

export const fetchFailed = ( error ) => {
    return {
        type: FETCH_FAILED,
        payload: error
    }
}