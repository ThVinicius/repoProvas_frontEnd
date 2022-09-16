import styled from 'styled-components'
import Accordion from 'react-bootstrap/Accordion'

const Container = styled(Accordion)`
  width: 100%;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
`

const Header = styled(Accordion.Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    font: normal 500 16px 'Poppins', sans-serif;
    color: rgba(0, 0, 0, 0.8);
    letter-spacing: 0.15px;
  }
`

export { Container, Header }
