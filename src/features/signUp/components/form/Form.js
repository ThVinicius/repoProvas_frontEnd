import { useState } from 'react'
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
  const [confirmPassword, setConfirmPassword] = useState('')
  const [response, fetch] = useApi()

  useToast(response)

  function submit(event) {
    event.preventDefault()

    const data = { email, password, confirmPassword }

    fetch(...request(data))
  }

  return (
    <Container onSubmit={submit}>
      <h1>Cadastro</h1>
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
      <InputIcon
        placeholder="Confirme sua senha"
        value={confirmPassword}
        onChange={setConfirmPassword}
        loading={response === 'loading' ? true : false}
      />
      <Box>
        <Anchor to="/signup">Já possuo cadastro</Anchor>
        <Button
          name="CADASTRAR"
          loading={response === 'loading' ? true : false}
          nameLoading={threeDots}
        />
      </Box>
    </Container>
  )
}
