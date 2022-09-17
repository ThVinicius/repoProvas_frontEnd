export function createTest(data) {
  const submitToken = true

  const test = { url: '/tests', method: 'post', data }

  const requests = [test]

  return [requests, submitToken, sucessCase, failCase]
}

function sucessCase(props) {
  const { global, setGlobal, setResponse } = props

  const type = 'success'

  const message = 'Prova adicionada com sucesso!'

  global.testsByDisciplines = null
  global.testsByTeachers = null

  setGlobal({ ...global })

  setResponse({ type, message })
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

    case 'Not Found':
      message = res.data

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
