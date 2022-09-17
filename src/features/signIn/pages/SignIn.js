import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import App from '../../../containers/app/App'
import Form from '../components/form/Form'

export default function SignIn() {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token !== null) {
      global.token = token

      navigate('/home')
    }
  }, [])

  return (
    <App>
      <Form />
    </App>
  )
}
