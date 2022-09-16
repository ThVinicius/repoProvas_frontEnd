import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const Empty = styled.h4`
  font: normal 500 14px 'Poppins', sans-serif;
  color: #000000;
`

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 9px;
`

const Category = styled.h5`
  font: normal 700 14px 'Poppins', sans-serif;
  color: #000000;
`
const TestName = styled.h5`
  font: normal 500 14px 'Poppins', sans-serif;
  color: #000000;
  display: flex;
  gap: 9px;

  span {
    color: #878787;
  }
`

export { Container, Category, TestName, Box, Empty }
