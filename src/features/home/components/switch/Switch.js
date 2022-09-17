import { useGlobal } from '../../../../context/globalContext'
import DisciplineAccordion from '../disciplineAccordion/DisciplineAccordion'
import TeachersAccordion from '../teachersAccordion/TeachersAccordion'
import Form from '../form/Form'
import { Spinner } from '../../../../components/spinners/spinners'

export default function Switch({ selected }) {
  const { global } = useGlobal()

  switch (selected) {
    case 'DISCIPLINAS':
      return <DisciplineAccordion array={global.testsByDisciplines} />

    case 'PESSOA INSTRUTORA':
      return <TeachersAccordion array={global.testsByTeachers} />

    case 'ADICIONAR':
      return global.teachersDisciplines !== null ? <Form /> : Spinner

    default:
      return null
  }
}
