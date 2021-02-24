import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchFailed, fetchLoading, fetchSuccess } from './redux/actions';
import styled from 'styled-components'
import { SERVER_URL } from './constants/constants';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`

const Button = styled.button`
    background: ${props => props.color == 'OFF' ? 'red' : 'green'};
    width: 150px;
    height: 150px;
    border-radius: 50%;
    outline: none;
    border:none;
    cursor: pointer;
`

function App() {
    const dispatch = useDispatch()
    const status = useSelector(state => state.status)
    const loading = useSelector(state => state.loading)
    console.log(status)
    const doFetch = useCallback(() => {
        dispatch(fetchLoading())
        fetch(`${SERVER_URL}`)
            .then(require => require.json())
            .then(status => {
                dispatch(fetchSuccess(status))
            })
            .catch(error => {
                dispatch(fetchFailed(error))
            })
    }, [])

    const toggleStatus = (status) => {
        dispatch(fetchLoading())
        console.log(status)
        fetch(`${SERVER_URL}/toggle`, {
            method: 'POST',
            body: JSON.stringify({ status }),
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }
        })
        .catch(error => {
            dispatch(fetchFailed(error))
        })
    }

    useEffect(() => {
        doFetch()
    }, [status, doFetch])
    // const doFetch = useCallback(() => {
    //     return (dispatch) => {
    //         dispatch(fetchLoading())
    //         fetch(`${SERVER_URL}`)
    //             .then(require => require.json())
    //             .then(status => {
    //                 dispatch(fetchSuccess(status))
    //             })
    //             .catch(error => {
    //                 dispatch(fetchFailed(error))
    //             })
    //     }
    //
    // }, [dispatch])
    // const doFetch = () => {
    //     return  (dispatch) => {
    //         dispatch(fetchLoading())
    //         fetch(`${SERVER_URL}`)
    //         .then(require => require.json())
    //         .then(status => {
    //             dispatch(fetchSuccess(status))
    //         })
    //         .catch(error => {
    //             dispatch(fetchFailed(error))
    //         })
    //     }
    // }



    // const toggleStatus = (status) => {
    //     return (dispatch) => {
    //         dispatch(fetchLoading())
    //         console.log(status)
    //         fetch(`${SERVER_URL}/toggle`, {
    //             method: 'POST',
    //             body: JSON.stringify({ status }),
    //             headers: {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json'
    //             }
    //         })
    //         .catch(error => {
    //             dispatch(fetchFailed(error))
    //         })
    //     }
    // }



    // useEffect(() => {
    //     dispatch(toggleStatus())
    // }, [dispatch])

    if (loading) {
        return <div>...loading</div>
    }
    return (
        <Container>
            <Button
                color={status}
                onClick={() => toggleStatus(status == 'OFF' ? 'ON' : 'OFF')}
            >
                {status}
            </Button>
        </Container>
    );
}

export default App
