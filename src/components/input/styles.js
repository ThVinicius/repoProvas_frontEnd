import styled from 'styled-components'

const Container = styled.input`
  box-sizing: border-box;
  width: ${props => props.width};
  height: ${props => props.height};
  letter-spacing: 0.15px;
  padding: 12px;
  border: ${props => props.border};
  border-radius: ${props => props.borderRadius};
  background-color: ${props => props.backGround};
  font: normal 500 16px 'Poppins', sans-serif;
  color: ${props => props.color};
  background-repeat: no-repeat;
  background-size: auto;
  background-position: ${props => props.backgroundPosition};

  ::placeholder {
    color: rgba(0, 0, 0, 0.6);
    font: normal 500 16px 'Poppins', sans-serif;
  }
`

export { Container }
