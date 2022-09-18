import Accordion from '../accordion/Accordion'
import Categories from '../categories/Categories'
import { Spinner } from '../../../../components/spinners/spinners'
import { LoadingBox, Empty } from './styles'

const msg = 'Não tem prova para nenhuma categoria para essa disciplina'

const termsEmpty = 'Não há disciplinas e nem provas nesse período'

export default function DisciplineAccordion({ array }) {
  const disciplinesAccordion = array =>
    array.length !== 0 ? (
      array?.map(({ discipline, categories }, index) => (
        <Accordion header={discipline} eventKey={index} key={index}>
          <Categories arrCategories={categories} msg={msg} />
        </Accordion>
      ))
    ) : (
      <Empty>{termsEmpty}</Empty>
    )

  return array !== null ? (
    array.map(({ number, disciplines }, index) => (
      <Accordion header={`${number}º Período`} eventKey={index} key={index}>
        {disciplinesAccordion(disciplines)}
      </Accordion>
    ))
  ) : (
    <LoadingBox>{Spinner}</LoadingBox>
  )
}
