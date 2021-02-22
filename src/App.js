import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { toggleStatus} from './redux/actions';
import styled from 'styled-components'

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
    return (
        <Container>
            <Button
            color={status}
            onClick={() => dispatch(toggleStatus(status == 'OFF' ? 'ON' : 'OFF'))}
            >
                {status}
            </Button>
        </Container>
    );
}

export default App
