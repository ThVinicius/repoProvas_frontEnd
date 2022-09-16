import Accordion from '../accordion/Accordion'
import Categories from '../categories/Categories'

const msg = 'Não tem prova para nenhuma categoria para essa pessoa instrutora'

export default function TeachersAccordion({ array }) {
  return array.map(({ teacher, categories }, index) => (
    <Accordion header={teacher} eventKey={index} key={index}>
      <Categories arrCategories={categories} msg={msg} />
    </Accordion>
  ))
}
