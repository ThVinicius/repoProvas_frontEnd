import { useState } from 'react'
import { useGlobal } from '../../../../context/globalContext'
import useApi from '../../../../hooks/useApi'
import { createTest } from '../../api/createTest'
import useToast from '../../../../hooks/useToast'
import useSelect from '../../../../hooks/useSelect'
import useClean from '../../../../hooks/useClean'
import Input from '../../../../components/input/Input'
import Button from '../../../../components/button/Button'
import { Container } from './formStyles'

export default function Form() {
  const { global } = useGlobal()
  const [name, setName] = useState('')
  const [pdfUrl, setPdfUrl] = useState('')
  const [category, setCategory] = useState('')
  const [discipline, setDiscipline] = useState('')
  const [teacher, setTeacher] = useState('')
  const { select } = useSelect(global, discipline, setTeacher)
  const [response, fetch] = useApi()

  useToast(response)

  useClean(
    [setName, setPdfUrl, setCategory, setDiscipline, setTeacher],
    response
  )

  function submit(event) {
    event.preventDefault()

    const data = {
      name,
      pdfUrl,
      categoryId: Number(category),
      teacherDisciplineId: Number(teacher)
    }

    fetch(...createTest(data))
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
      <Button width="100%" name="ENVIAR" />
    </Container>
  )
}
