import { Toaster } from 'react-hot-toast'
import HeaderContainer from '../../containers/header/Header'
import Auth from './auth/Auth'

export default function Header() {
  return (
    <HeaderContainer>
      <Auth />
      <Toaster position="top-right" reverseOrder={false} />
    </HeaderContainer>
  )
}
