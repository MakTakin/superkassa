import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { SERVER_URL } from './constants/constants';
import { fetchFailed, fetchLoading, fetchSuccess, toggleStatus } from './redux/actions/actions';
import { fetchStatus } from './api/fetchStatus';
import Loader from './components/loader/loader';
import styled from 'styled-components'

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

    const getStatus = useCallback(async () => {
        dispatch(fetchLoading())
        try {
            const status = await fetch(`${SERVER_URL}`)
            const [ state ] = await status.json()
            dispatch(fetchSuccess(state.value))
        }   catch (error) {
                dispatch(fetchFailed(error))
        }
    }, [])

    const toggleStatusBTN = async ( status ) => {
        try {
            await fetchStatus(`${SERVER_URL}/toggle`, status)
            dispatch(toggleStatus(status))
        }   catch (error) {
                dispatch(fetchFailed(error))
        }
    }

    useEffect(() => {
        getStatus()
    }, [ status, getStatus ])

    return (
        <Container>
            {loading ?
                <Loader/> :
                <Button
                    color={status}
                    onClick={() => toggleStatusBTN(status == 'OFF' ? 'ON' : 'OFF')}
                >
                    {status}
                </Button>
            }
        </Container>
    );
}

export default App
