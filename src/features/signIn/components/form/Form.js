import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import useToast from '../../../../hooks/useToast'
import useApi from '../../../../hooks/useApi'
import request from '../../api/request'
import Input from '../../../../components/input/Input'
import InputIcon from '../../../../components/inputIcon/InputIcon'
import Button from '../../../../components/button/Button'
import { threeDots } from '../../../../components/spinners/spinners'
import { Container, Box, Anchor } from './formStyles'

export default function Form() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [response, fetch] = useApi()

  useToast(response)

  function submit(event) {
    event.preventDefault()

    const data = { email, password }

    fetch(...request(data))
  }

  return (
    <Container onSubmit={submit}>
      <Toaster position="top-right" reverseOrder={false} />
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={setEmail}
        loading={response === 'loading' ? true : false}
      />
      <InputIcon
        placeholder="Senha"
        value={password}
        onChange={setPassword}
        loading={response === 'loading' ? true : false}
      />
      <Box>
        <Anchor to="/signup">Não possuo cadastro</Anchor>
        <Button
          name="ENTRAR"
          loading={response === 'loading' ? true : false}
          nameLoading={threeDots}
        />
      </Box>
    </Container>
  )
}
