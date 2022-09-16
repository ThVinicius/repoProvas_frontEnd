import DisciplineAccordion from '../disciplineAccordion/DisciplineAccordion'
import TeachersAccordion from '../teachersAccordion/TeachersAccordion'

const disciplines = [
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

const teachers = [
  {
    teacherId: 1,
    teacher: 'Diego Pinho',
    categories: [
      {
        categoryId: 1,
        category: 'Projeto',
        tests: [
          {
            testId: 1,
            test: 'prova muito dificil',
            pdfUrl: 'https://google.com',
            discipline: 'HTML e CSS'
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
            discipline: 'HTML e CSS'
          },
          {
            testId: 3,
            test: 'prova muito media',
            pdfUrl: 'https://google.com',
            discipline: 'HTML e CSS'
          }
        ]
      }
    ]
  },
  {
    teacherId: 2,
    teacher: 'Bruna Hamori',
    categories: []
  }
]

export default function Switch({ selected }) {
  switch (selected) {
    case 'DISCIPLINAS':
      return <DisciplineAccordion array={disciplines} />

    case 'PESSOA INSTRUTORA':
      return <TeachersAccordion array={teachers} />

    default:
      return null
  }
}
