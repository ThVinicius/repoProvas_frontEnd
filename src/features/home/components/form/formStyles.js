import styled from 'styled-components'

const Container = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  select {
    width: 100%;
    height: 56px;
    padding: 12px;
    background-color: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.23);
    border-radius: 4px;
    font: normal 500 16px 'Poppins', sans-serif;
  }
`

export { Container }
