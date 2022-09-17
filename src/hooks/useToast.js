import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useGlobal } from '../context/globalContext'
import logout from '../utils/logout'

export default function useToast(res) {
  const navigate = useNavigate()
  const { global } = useGlobal()

  useEffect(() => {
    if (res !== null && res.message !== undefined) {
      switch (res.type) {
        case 'error':
          toast.error(res.message)
          break

        case 'success':
          toast.success(res.message)
          break

        default:
          break
      }

      if (res.nav !== undefined) {
        if (res.nav === '/') return logout(global, navigate)

        navigate(res.nav)
      }
    }
  }, [res])
}
