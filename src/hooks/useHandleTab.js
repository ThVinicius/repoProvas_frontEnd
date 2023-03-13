import { useEffect, useState } from 'react'

export default function useHandleTab(tab, setSearch) {
  const [placeholder, setPlaceholder] = useState('')
  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    switch (tab) {
      case 'DISCIPLINAS':
        setPlaceholder('Pesquise por disciplina')
        setDisabled(false)
        break

      case 'PESSOA INSTRUTORA':
        setPlaceholder('Pesquise por pessoa instrutora')
        setDisabled(false)
        break

      case 'ADICIONAR':
        setSearch('')
        setPlaceholder('Pesquisa desabilitada')
        setDisabled(true)
        break

      default:
        break
    }
  }, [tab])

  return { placeholder, disabled }
}
