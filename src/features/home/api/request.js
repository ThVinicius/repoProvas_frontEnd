export function request() {
  const submitToken = true

  const teachers = { url: '/teachers/tests', method: 'get' }

  const terms = { url: '/terms/tests', method: 'get' }

  const requests = [terms, teachers]

  return [requests, submitToken, sucessCase, failCase]
}

function sucessCase(props) {
  const { res, global, setGlobal } = props

  const [disciplines, teachers] = res

  global.testsByDisciplines = disciplines.data

  global.testsByTeachers = teachers.data

  setGlobal({ ...global })
}

function failCase(props) {
  const { res, setResponse } = props

  const type = 'success'

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
