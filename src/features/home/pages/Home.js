import { useState } from 'react'
import App from '../../../containers/app/App'
import Content from '../../../containers/content/Content'
import Select from '../components/select/Select'
import DisciplineAccordion from '../components/disciplineAccordion/DisciplineAccordion'

const body = [
  {
    termId: 1,
    number: 1,
    disciplines: [
      {
        disciplineId: 1,
        discipline: 'HTML e CSS',
        categories: [
          {
            categoryId: 1,
            category: 'Projeto',
            tests: [
              {
                testId: 1,
                test: 'prova muito dificil',
                pdfUrl: 'https://google.com',
                teacherId: 1,
                teacher: 'Diego Pinho'
              }
            ]
          },
          {
            categoryId: 2,
            category: 'Prática',
            tests: [
              {
                testId: 2,
                test: 'prova muito facil',
                pdfUrl: 'https://google.com',
                teacherId: 1,
                teacher: 'Diego Pinho'
              },
              {
                testId: 3,
                test: 'prova muito media',
                pdfUrl: 'https://google.com',
                teacherId: 1,
                teacher: 'Diego Pinho'
              }
            ]
          }
        ]
      },
      {
        disciplineId: 4,
        discipline: 'Humildade',
        categories: []
      }
    ]
  },
  {
    termId: 2,
    number: 2,
    disciplines: [
      {
        disciplineId: 5,
        discipline: 'Planejamento',
        categories: []
      },
      {
        disciplineId: 2,
        discipline: 'JavaScript',
        categories: []
      }
    ]
  },
  {
    termId: 3,
    number: 3,
    disciplines: [
      {
        disciplineId: 3,
        discipline: 'React',
        categories: []
      },
      {
        disciplineId: 6,
        discipline: 'Autoconfiança',
        categories: []
      }
    ]
  }
]

export default function Home() {
  const [select, setSelect] = useState('DISCIPLINAS')

  return (
    <App>
      <Content>
        <Select select={select} setSelect={setSelect} />
        <DisciplineAccordion array={body} />
      </Content>
    </App>
  )
}
