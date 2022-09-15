import { useEffect } from 'react'
import toast from 'react-hot-toast'

export default function useToast(res) {
  useEffect(() => {
    if (res !== null && res.message !== undefined) {
      toast.error(res.message)
    }
  }, [res])
}
