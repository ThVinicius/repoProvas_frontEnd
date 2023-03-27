import { useMemo } from 'react'
import { useGlobal } from '../context/globalContext'

export default function useFilterByDisciplines(search) {
  const { global } = useGlobal()

  const result = useMemo(() => {
    const { testsByDisciplines: disciplines } = global

    if (search.length > 0) {
      return disciplines?.filter(({ disciplines }) =>
        disciplines.some(({ discipline }) =>
          discipline.toLowerCase().includes(search.toLowerCase())
        )
      )
    } else {
      return disciplines
    }
  }, [search, global])

  return { result }
}
