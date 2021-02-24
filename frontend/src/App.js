import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { SERVER_URL } from './constants/constants';
import { fetchFailed, fetchLoading, fetchSuccess, toggleStatus } from './redux/actions';
import styled from 'styled-components'
import Loader from './components/loader/loader';

const Container = styled.div`
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
`

const Button = styled.button`
    background: ${props => props.color == 'OFF' ? 'red' : 'green'};
    width: 150px;
    height: 150px;
    outline: none;
    border:none;
    border-radius: 50%;
    cursor: pointer;
`

function App() {
    const dispatch = useDispatch()
    const status = useSelector(state => state.status)
    const loading = useSelector(state => state.loading)

    const doFetch = useCallback(() => {
        dispatch(fetchLoading())
        fetch(`${SERVER_URL}`)
        .then( require => require.json())
        .then( status => {
            const [ state ] = status
            dispatch(fetchSuccess(state.value))
        })
        .catch( error => {
            dispatch(fetchFailed(error))
        })
    }, [])

    const toggleStatusBTN = ( status ) => {
        fetch(`${SERVER_URL}/toggle`, {
            method: 'POST',
            body: JSON.stringify({ status }),
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }
        })
        .then( response => {
            if ( response.ok ) {
                dispatch(toggleStatus(status))
            }
        })
        .catch( error => {
            dispatch(fetchFailed(error))
        })
    }

    useEffect(() => {
        doFetch()
    }, [ status, doFetch ])

    if (loading) {
        return (
            <Container>
                <Loader/>
            </Container>
        )
    }
    return (
        <Container>
            <Button
                color={ status }
                onClick={() => toggleStatusBTN(status == 'OFF' ? 'ON' : 'OFF')}
            >
                { status }
            </Button>
        </Container>
    );
}

export default App
