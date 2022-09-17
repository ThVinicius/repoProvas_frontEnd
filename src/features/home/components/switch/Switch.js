import { useGlobal } from '../../../../context/globalContext'
import DisciplineAccordion from '../disciplineAccordion/DisciplineAccordion'
import TeachersAccordion from '../teachersAccordion/TeachersAccordion'
import Form from '../form/Form'

export default function Switch({ selected }) {
  const { global } = useGlobal()

  switch (selected) {
    case 'DISCIPLINAS':
      return <DisciplineAccordion array={global.testsByDisciplines} />

    case 'PESSOA INSTRUTORA':
      return <TeachersAccordion array={global.testsByTeachers} />

    case 'ADICIONAR':
      return <Form />

    default:
      return null
  }
}
