import Accordion from '../accordion/Accordion'
import Categories from '../categories/Categories'

const msg = 'Não tem prova para nenhuma categoria para essa disciplina'

export default function DisciplineAccordion({ array }) {
  const disciplinesAccordion = array =>
    array.map(({ discipline, categories }, index) => (
      <Accordion header={discipline} eventKey={index} key={index}>
        <Categories arrCategories={categories} msg={msg} />
      </Accordion>
    ))

  return array.map(({ number, disciplines }, index) => (
    <Accordion header={`${number}º Período`} eventKey={index} key={index}>
      {disciplinesAccordion(disciplines)}
    </Accordion>
  ))
}
