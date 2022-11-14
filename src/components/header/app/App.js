import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGlobal } from '../../../context/globalContext'
import Logo from '../logo/Logo'
import { Exit } from '../../../assets/icons/icons'
import Input from '../../input/Input'
import logout from '../../../utils/logout'
import { Container, Logout, InputBox, Box } from './appStyles'

export default function App() {
  const [search, setSearch] = useState('')
  const { global } = useGlobal()
  const navigate = useNavigate()

  return (
    <Container>
      <Box>
        <Logo />
        <Logout onClick={() => logout(global, navigate)}>
          <Exit />
        </Logout>
      </Box>
      <InputBox>
        <Input
          placeholder="Pesquise por disciplina"
          value={search}
          onChange={setSearch}
        />
      </InputBox>
    </Container>
  )
}
