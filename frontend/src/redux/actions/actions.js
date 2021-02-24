import { STATUS_TOGGLE, FETCH_FAILED, FETCH_LOADING, FETCH_SUCCESS } from './types';

export const fetchLoading = () => {
    return {
        type: FETCH_LOADING,
    }
}

export const fetchSuccess = ( status ) => {
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

export const toggleStatus = ( status ) => {
    return {
        type: STATUS_TOGGLE,
        payload: status
    }
}