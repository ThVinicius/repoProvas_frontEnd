import { useState } from 'react'
import { useGlobal } from '../../../../context/globalContext'
import useApi from '../../../../hooks/useApi'
import { createTest } from '../../api/createTest'
import useToast from '../../../../hooks/useToast'
import useSelect from '../../../../hooks/useSelect'
import useClean from '../../../../hooks/useClean'
import Input from '../../../../components/input/Input'
import Button from '../../../../components/button/Button'
import { Container, FileContainer } from './formStyles'
import { threeDots } from '../../../../components/spinners/spinners'

export default function Form() {
  const { global } = useGlobal()
  const [name, setName] = useState('')
  const [file, setFile] = useState()
  const [category, setCategory] = useState('')
  const [discipline, setDiscipline] = useState('')
  const [teacher, setTeacher] = useState('')
  const { select } = useSelect(global, discipline, setTeacher)
  const [response, fetch] = useApi()

  useToast(response)

  useClean([setName, setCategory, setDiscipline, setTeacher], response, setFile)

  function submit(event) {
    event.preventDefault()

    const formData = new FormData()

    formData.append('name', name)

    formData.append('file', file)

    formData.append('categoryId', category)

    formData.append('teacherDisciplineId', teacher)

    fetch(...createTest(formData))
  }

  return (
    <Container onSubmit={submit}>
      <Input
        placeholder="Nome da prova"
        width="100%"
        value={name}
        onChange={setName}
        loading={response === 'loading' ? true : false}
      />

      <FileContainer>
        <label htmlFor="arquivo">Escolha a prova em pdf</label>
        <input
          type="file"
          name="arquivo"
          required
          onChange={e => setFile(e.target.files[0])}
          disabled={response === 'loading' ? true : false}
        />
      </FileContainer>

      <select
        value={category}
        onChange={e => setCategory(e.target.value)}
        disabled={response === 'loading' ? true : false}
        required
      >
        <option value="" disabled>
          Categoria
        </option>
        {global.categories.map(({ id, name }, index) => (
          <option value={`${id}`} key={index}>
            {name}
          </option>
        ))}
      </select>

      <select
        value={discipline}
        onChange={e => setDiscipline(e.target.value)}
        required
        disabled={response === 'loading' ? true : false}
      >
        <option value="" disabled>
          Disciplina
        </option>
        {global.teachersDisciplines.map(
          ({ discipline, disciplineId }, index) => (
            <option value={`${disciplineId}`} key={index}>
              {discipline}
            </option>
          )
        )}
      </select>

      <select
        value={teacher}
        onChange={e => setTeacher(e.target.value)}
        required
        disabled={response === 'loading' ? true : false}
      >
        <option value="" disabled>
          Pessoa Instrutora
        </option>
        {select.map(({ teacherDisciplineId, teacher }, index) => (
          <option value={`${teacherDisciplineId}`} key={index}>
            {teacher}
          </option>
        ))}
      </select>
      <Button
        width="100%"
        name="ENVIAR"
        loading={response === 'loading' ? true : false}
        nameLoading={threeDots}
      />
    </Container>
  )
}
