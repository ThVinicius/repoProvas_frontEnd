import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  h1 {
    font: normal 500 24px 'Poppins', sans-serif;
    color: rgba(0, 0, 0, 0.8);
  }
`
const Box = styled.div`
  width: 32.22%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Anchor = styled(Link)`
  font: normal 500 16px 'Poppins', sans-serif;
  color: rgba(70, 115, 202, 0.8);
`

export { Container, Box, Anchor }
