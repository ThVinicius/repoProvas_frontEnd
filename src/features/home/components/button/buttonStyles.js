import styled from 'styled-components'

const Container = styled.button`
  width: unset;
  padding: 6px 16px;
  font: normal 500 14px 'Roboto', sans-serif;
  background-color: ${props => (props.teste ? '#1976d2' : '#ffffff')};
  color: ${props => (props.teste ? '#ffffff' : '#1976d2')};
  border: 1px solid rgba(25, 118, 210, 0.5);
  border-radius: 4px;
  box-shadow: ${props =>
    props.teste
      ? `0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)`
      : 'none'};
`
export { Container }
