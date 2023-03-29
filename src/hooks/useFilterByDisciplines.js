import { useMemo } from 'react'
import { useGlobal } from '../context/globalContext'

export default function useFilterByDisciplines(search) {
  const { global } = useGlobal()

  const result = useMemo(() => {
    const { testsByDisciplines: disciplines } = global

    if (search.length > 0) {
      const filterTerms = disciplines?.filter(({ disciplines }) =>
        disciplines.some(({ discipline }) =>
          discipline.toLowerCase().includes(search.toLowerCase())
        )
      )

      return filterTerms.map(({ number, termId, disciplines }) => {
        const disciplinesFilter = disciplines.filter(({ discipline }) =>
          discipline.toLowerCase().includes(search.toLowerCase())
        )

        return { number, termId, disciplines: disciplinesFilter }
      })
    } else {
      return disciplines
    }
  }, [search, global])

  return { result }
}
