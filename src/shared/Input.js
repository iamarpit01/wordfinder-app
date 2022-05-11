import React from 'react'
import styled from "styled-components";

const InputContainer= styled.div`
`

const InputWrapper = styled.input`
    background-color: #f7f7f7;
    color: #333333;
`

function Input(props) {
  const {value, type, onChange, inputWrapperClass, placeholder} = props;
  return (
    <InputContainer className={inputWrapperClass}>
        <InputWrapper 
            value={value}
            type={type}
            onChange={onChange}
            placeholder={placeholder} 
            {...props}
            />
    </InputContainer>
  )
}

export default Input