import { Container, Header } from './accordionStyles'

export default function Accordion({ eventKey, header, children }) {
  return (
    <Container>
      <Container.Item eventKey={`${eventKey}`}>
        <Header>{header}</Header>
        <Container.Body>{children}</Container.Body>
      </Container.Item>
    </Container>
  )
}
