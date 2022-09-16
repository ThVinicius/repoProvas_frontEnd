import { useState } from 'react'
import App from '../../../containers/app/App'
import Content from '../../../containers/content/Content'
import Select from '../components/select/Select'
import Switch from '../components/switch/Switch'

export default function Home() {
  const [select, setSelect] = useState('DISCIPLINAS')

  return (
    <App>
      <Content>
        <Select select={select} setSelect={setSelect} />
        <Switch selected={select} />
      </Content>
    </App>
  )
}
