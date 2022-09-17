import { useState } from 'react'
import Input from '../../../../components/input/Input'
import Button from '../../../../components/button/Button'
import { Container } from './formStyles'

export default function Form() {
  const [name, setName] = useState('')
  const [pdfUrl, setPdfUrl] = useState('')
  const [category, setCategory] = useState('')
  const [discipline, setDiscipline] = useState('')
  const [teacher, setTeacher] = useState('')

  function submit(event) {
    event.preventDefault()

    const data = { name }

    console.log(data)
  }

  return (
    <Container onSubmit={submit}>
      <Input
        placeholder="Nome da prova"
        width="100%"
        value={name}
        onChange={setName}
      />
      <Input
        placeholder="Link da prova"
        width="100%"
        value={pdfUrl}
        onChange={setPdfUrl}
      />

      <select
        value={category}
        onChange={e => setCategory(e.target.value)}
        required
      >
        <option value="" disabled>
          Categoria
        </option>
        <option value="1">Maior quantidade de visualizações</option>
        <option value="2">Menor quantidade de visualizações</option>
        <option value="3">Url por ordem alfabetiza [a-z]</option>
        <option value="4">Url por ordem alfabetiza [z-a]</option>
      </select>

      <select
        value={discipline}
        onChange={e => setDiscipline(e.target.value)}
        required
      >
        <option value="" disabled>
          Disciplina
        </option>
        <option value="1">Maior quantidade de visualizações</option>
        <option value="2">Menor quantidade de visualizações</option>
        <option value="3">Url por ordem alfabetiza [a-z]</option>
        <option value="4">Url por ordem alfabetiza [z-a]</option>
      </select>

      <select
        value={teacher}
        onChange={e => setTeacher(e.target.value)}
        required
      >
        <option value="" disabled>
          Pessoa Instrutora
        </option>
        <option value="1">Maior quantidade de visualizações</option>
        <option value="2">Menor quantidade de visualizações</option>
        <option value="3">Url por ordem alfabetiza [a-z]</option>
        <option value="4">Url por ordem alfabetiza [z-a]</option>
      </select>
      <Button width="100%" name="ENVIAR" />
    </Container>
  )
}
