import Button from '../button/Button'
import { Container } from './selectStyles'

const buttons = ['DISCIPLINAS', 'PESSOA INSTRUTURA', 'ADICIONAR']

export default function Select({ select, setSelect }) {
  return (
    <Container>
      {buttons.map((item, index) => (
        <Button name={item} select={select} setSelect={setSelect} key={index} />
      ))}
    </Container>
  )
}
