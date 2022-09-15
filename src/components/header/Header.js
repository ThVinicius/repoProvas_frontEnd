import { Toaster } from 'react-hot-toast'
import usePath from '../../hooks/usePath'
import HeaderContainer from '../../containers/header/Header'
import Auth from './auth/Auth'
import App from './app/App'

export default function Header() {
  const { isAuth } = usePath()

  return (
    <HeaderContainer>
      {isAuth ? <Auth /> : <App />}
      <Toaster position="top-right" reverseOrder={false} />
    </HeaderContainer>
  )
}
