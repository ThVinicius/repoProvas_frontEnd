import Button from '../button/Button'
import { Container } from './selectStyles'

const buttons = ['DISCIPLINAS', 'PESSOA INSTRUTORA', 'ADICIONAR']

export default function Select({ select, setSelect }) {
  return (
    <Container>
      {buttons.map((item, index) => (
        <Button name={item} select={select} setSelect={setSelect} key={index} />
      ))}
    </Container>
  )
}
