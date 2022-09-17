import { useState, useEffect } from 'react'

export default function useSelect(global, listen, cleanInput) {
  const [select, setSelect] = useState([])

  useEffect(() => {
    const arr = global.teachersDisciplines?.find(
      item => item.disciplineId === Number(listen)
    )

    if (listen !== '') {
      cleanInput('')

      setSelect(arr.teachers)
    }
  }, [listen])

  return { select }
}
