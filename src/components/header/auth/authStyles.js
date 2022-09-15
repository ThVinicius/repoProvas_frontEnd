import styled from 'styled-components'

const Container = styled.header`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  img {
    width: 63.5px;
    height: 63.5px;
  }

  h1 {
    font: normal 700 36px 'Lexend', sans-serif;
    color: #000000;
  }

  span {
    color: #3f61d7;
  }
`

export { Container }
