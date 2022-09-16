import { Container } from './buttonStyles'

export default function Button({ name, select, setSelect }) {
  function selected() {
    if (select === name) return true

    return false
  }

  return (
    <Container teste={selected()} onClick={() => setSelect(name)}>
      {name}
    </Container>
  )
}
