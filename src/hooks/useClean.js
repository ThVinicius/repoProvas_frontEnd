import { useEffect } from 'react'

export default function useClean(array, listen) {
  useEffect(() => {
    if (listen?.type === 'success') {
      for (const input of array) {
        input('')
      }
    }
  }, [listen])
}
