import { useEffect } from 'react'
import { useGlobal } from '../../../../context/globalContext'
import useFilterByDisciplines from '../../../../hooks/useFilterByDisciplines'
import useFilterByTeachers from '../../../../hooks/useFilterByTeachers'
import { useTab } from '../../../../context/tabContext'
import DisciplineAccordion from '../disciplineAccordion/DisciplineAccordion'
import TeachersAccordion from '../teachersAccordion/TeachersAccordion'
import Form from '../form/Form'
import { Spinner } from '../../../../components/spinners/spinners'

export default function Switch({ selected, search }) {
  const { global } = useGlobal()
  const { result } = useFilterByDisciplines(search)
  const { teachers } = useFilterByTeachers(search)
  const { setTab } = useTab()

  useEffect(() => {
    setTab(selected)
  }, [selected])

  switch (selected) {
    case 'DISCIPLINAS':
      return <DisciplineAccordion array={result} />

    case 'PESSOA INSTRUTORA':
      return <TeachersAccordion array={teachers} />

    case 'ADICIONAR':
      return global.teachersDisciplines !== null ? <Form /> : Spinner

    default:
      return null
  }
}
