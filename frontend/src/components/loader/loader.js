import React from 'react'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;
export const Loading = styled.div`
    display: inline-block;
    width: 150px;
    height: 150px;
    
    &::after {
        content: " ";
        display: block;
        width: 140px;
        height: 140px;
        border-radius: 50%;
        border: 8px solid blue;
        border-color: blue transparent blue transparent;
        animation: ${rotate} 1.2s linear infinite;
    }
`

const Loader = () => {
    return (
        <Loading/>
    )
}
export default Loader