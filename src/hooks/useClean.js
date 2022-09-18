import { useEffect } from 'react'

export default function useClean(array, listen, file) {
  useEffect(() => {
    if (listen?.type === 'success') {
      file(null)

      for (const input of array) {
        input('')
      }
    }
  }, [listen])
}
