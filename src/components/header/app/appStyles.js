import styled from 'styled-components'

const Container = styled.header`
  width: 100%;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #c4c4c4;
`

const Box = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
`

const Logout = styled.div`
  height: 100%;
  display: flex;
`

const InputBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export { Container, Logout, InputBox, Box }
