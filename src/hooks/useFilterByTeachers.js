import { useMemo } from 'react'
import { useGlobal } from '../context/globalContext'

export default function useFilterByTeachers(search) {
  const { global } = useGlobal()

  const teachers = useMemo(() => {
    if (search.length > 0) {
      return global.testsByTeachers.filter(({ teacher }) =>
        teacher.toLowerCase().includes(search.toLowerCase())
      )
    } else {
      return global.testsByTeachers
    }
  }, [global, search])

  return { teachers }
}
