import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalProvider } from './context/globalContext'
import ResetCSS from './assets/css/reset'
import GlobalCSS from './assets/css/reset'
import Header from './components/header/Header'
import SignIn from './features/signIn/pages/SignIn'

export default function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <ResetCSS />
        <GlobalCSS />
        <Header />
        <Routes>
          <Route path="/" element={<SignIn />} />
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  )
}
