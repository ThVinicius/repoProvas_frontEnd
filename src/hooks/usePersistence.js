import { useEffect } from 'react'
import { useGlobal } from '../context/globalContext'

export default function usePersistence(fetch, props) {
  const { global } = useGlobal()

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (global.token === null && token !== null) {
      global.token = token
    }

    if (global.testsByDisciplines === null) {
      fetch(...props)
    }
  }, [])
}
