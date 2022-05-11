import React from 'react'
import styled from "styled-components";

const ButtonWrapper = styled.button`
    background-color: ${props => props.primary ? "#003399" : "#f7f7f7"};
    color: #ffffff;
`

function Button(props) {
  const {type, onClick, children} = props;
    return (
    <ButtonWrapper 
        type={type}
        onClick={onClick}
        {...props}
        >
            {children}
        </ButtonWrapper>
  )
}

export default Button