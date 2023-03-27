import { useNavigate } from 'react-router-dom'
import { useGlobal } from '../../../context/globalContext'
import Logo from '../logo/Logo'
import { Exit } from '../../../assets/icons/icons'
import Input from '../../input/Input'
import logout from '../../../utils/logout'
import { Container, Logout, InputBox, Box } from './appStyles'
import { useTab } from '../../../context/tabContext'
import useHandleTab from '../../../hooks/useHandleTab'

export default function App({ search, setSearch }) {
  const { global } = useGlobal()
  const { tab } = useTab()
  const { placeholder, disabled } = useHandleTab(tab, setSearch)

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
          placeholder={placeholder}
          isDisabled={
            !global.testsByDisciplines || !global.testsByTeachers || disabled
          }
          value={search}
          onChange={setSearch}
        />
      </InputBox>
    </Container>
  )
}
