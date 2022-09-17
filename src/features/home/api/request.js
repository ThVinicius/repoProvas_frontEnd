export function request() {
  const submitToken = true

  const teachers = { url: '/tests/teachers', method: 'get' }

  const terms = { url: '/tests/disciplines', method: 'get' }

  const teachersDisciplines = { url: '/teachersdisciplines', method: 'get' }

  const categories = { url: '/categories', method: 'get' }

  const requests = [terms, teachers, teachersDisciplines, categories]

  return [requests, submitToken, sucessCase, failCase]
}

function sucessCase(props) {
  const { res, global, setGlobal } = props

  const [disciplines, teachers, teachersDisciplines, categories] = res

  global.testsByDisciplines = disciplines.data

  global.testsByTeachers = teachers.data

  global.teachersDisciplines = teachersDisciplines.data

  global.categories = categories.data

  setGlobal({ ...global })
}

function failCase(props) {
  const { res, setResponse } = props

  const type = 'error'

  const nav = '/'

  let message

  switch (res?.statusText) {
    case 'Bad Request':
      message = res.data.reduce((acc, cur) => `${acc}\n` + cur, '')

      break

    case 'Unauthorized':
    case 'Upgrade Required':
      message =
        'Ocorreu um um erro durante sua autenticação\nTente fazer o login novamente'

      break

    case 'Token expired/invalid':
      message = 'Sua sessão expirou\nFaça o login novamente'

      break

    default:
      message = 'Ocorreu um erro inesperado!\nTente mais tarde'
      break
  }

  setResponse({ type, message, nav })
}
