import { useState, useEffect } from 'react'
import { useGlobal } from '../../../context/globalContext'
import useApi from '../../../hooks/useApi'
import useToast from '../../../hooks/useToast'
import usePersistence from '../../../hooks/usePersistence'
import { request } from '../api/request'
import App from '../../../containers/app/App'
import Content from '../../../containers/content/Content'
import Select from '../components/select/Select'
import Switch from '../components/switch/Switch'

export default function Home({ search }) {
  const [select, setSelect] = useState('DISCIPLINAS')
  const [response, fetch] = useApi()
  const { global } = useGlobal()

  usePersistence(fetch, request())

  useEffect(() => {
    if (global.testsByDisciplines === null) fetch(...request())
  }, [global])

  useToast(response)

  return (
    <App>
      <Content>
        <Select select={select} setSelect={setSelect} />
        <Switch selected={select} search={search} />
      </Content>
    </App>
  )
}
