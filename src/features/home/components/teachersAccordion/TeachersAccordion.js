import Accordion from '../accordion/Accordion'
import Categories from '../categories/Categories'
import { LoadingBox } from '../disciplineAccordion/styles'
import { Spinner } from '../../../../components/spinners/spinners'

const msg = 'Não tem prova para nenhuma categoria para essa pessoa instrutora'

export default function TeachersAccordion({ array }) {
  return array !== null ? (
    array.map(({ teacher, categories }, index) => (
      <Accordion header={teacher} eventKey={index} key={index}>
        <Categories arrCategories={categories} msg={msg} />
      </Accordion>
    ))
  ) : (
    <LoadingBox>{Spinner}</LoadingBox>
  )
}
