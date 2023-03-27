import { useEffect } from 'react'
import { useGlobal } from '../../../../context/globalContext'
import useFilterByDisciplines from '../../../../hooks/useFilterByDisciplines'
import { useTab } from '../../../../context/tabContext'
import DisciplineAccordion from '../disciplineAccordion/DisciplineAccordion'
import TeachersAccordion from '../teachersAccordion/TeachersAccordion'
import Form from '../form/Form'
import { Spinner } from '../../../../components/spinners/spinners'

export default function Switch({ selected, search }) {
  const { global } = useGlobal()
  const { result } = useFilterByDisciplines(search)
  const { setTab } = useTab()

  useEffect(() => {
    setTab(selected)
  }, [selected])

  switch (selected) {
    case 'DISCIPLINAS':
      return <DisciplineAccordion array={result} />

    case 'PESSOA INSTRUTORA':
      return <TeachersAccordion array={global.testsByTeachers} />

    case 'ADICIONAR':
      return global.teachersDisciplines !== null ? <Form /> : Spinner

    default:
      return null
  }
}
