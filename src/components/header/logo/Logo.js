import book from '../../../assets/images/book.svg'
import { Container } from './logoStyles'

export default function Logo() {
  return (
    <Container>
      <img src={book} alt="logo" />
      <h1>
        Repo<span>Provas</span>
      </h1>
    </Container>
  )
}
