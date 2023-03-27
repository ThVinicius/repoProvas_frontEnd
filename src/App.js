import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalProvider } from './context/globalContext'
import { TabProvider } from './context/tabContext'
import ResetCSS from './assets/css/reset'
import GlobalCSS from './assets/css/global'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header/Header'
import SignIn from './features/signIn/pages/SignIn'
import SignUp from './features/signUp/pages/SignUp'
import Home from './features/home/pages/Home'

export default function App() {
  const [search, setSearch] = useState('')

  return (
    <BrowserRouter>
      <GlobalProvider>
        <ResetCSS />
        <GlobalCSS />
        <TabProvider>
          <Header {...{ search, setSearch }} />
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/home" element={<Home {...{ search }} />} />
          </Routes>
        </TabProvider>
      </GlobalProvider>
    </BrowserRouter>
  )
}
