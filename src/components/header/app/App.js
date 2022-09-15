import { useState } from 'react'
import Logo from '../logo/Logo'
import { Exit } from '../../../assets/icons/icons'
import Input from '../../input/Input'
import { Container, Logout, InputBox, Box } from './appStyles'

export default function App() {
  const [search, setSearch] = useState('')

  return (
    <Container>
      <Box>
        <Logo />
        <Logout>
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
