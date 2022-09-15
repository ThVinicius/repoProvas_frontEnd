import { Container } from './authStyles'
import book from '../../../assets/images/book.svg'

export default function Auth() {
  return (
    <Container>
      <img src={book} alt="logo" />
      <h1>
        Repo<span>Provas</span>
      </h1>
    </Container>
  )
}
