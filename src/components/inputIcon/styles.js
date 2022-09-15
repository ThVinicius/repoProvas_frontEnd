import styled from 'styled-components'
import { BsEye, BsEyeSlash } from 'react-icons/bs'

const InputBox = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  display: flex;
  box-sizing: border-box;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.23);
  border-radius: 4px;
  background-color: ${props => props.backGround};

  input {
    width: calc(100% - 50px);
    height: calc(${props => props.height} - 6px);
    border: none;
    border-radius: 12px;
    font: normal 500 16px 'Poppins', sans-serif;
    color: rgba(0, 0, 0, 0.6);
    padding-left: 14px;
    background-color: ${props => props.backGround};

    ::placeholder {
      color: #7e7e7e;
    }
  }

  textarea:focus,
  input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }

  &:focus-within {
    outline: 2px solid #5294e2;
  }

  div {
    width: 50px;
    height: ${props => props.height};
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const Eye = styled(BsEye)`
  width: 35px;
  height: 35px;
`

const EyeSlash = styled(BsEyeSlash)`
  width: 35px;
  height: 35px;
`

export { InputBox, Eye, EyeSlash }
