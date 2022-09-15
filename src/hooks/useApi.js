import { useState, useRef } from 'react'
import axios from 'axios'
import { useGlobal } from '../context/globalContext'
import API_URL from '../config/api'

function useApi() {
  const { global, setGlobal } = useGlobal()
  const [response, setResponse] = useState(null)
  const loading = useRef(false)

  function fetch(requests, submitToken, sucess, fail, props) {
    if (loading.current === true) return

    setResponse('loading')

    loading.current = true

    const headers = submitToken
      ? {
          Authorization: `Bearer ${global.token}`
        }
      : null

    const promises = []

    for (const request of requests) {
      const config = { baseURL: API_URL, headers, ...request }

      const promise = axios.request(config)

      promises.push(promise)
    }

    Promise.all(promises)
      .then(res => {
        sucess({ res, setResponse, global, setGlobal, ...props })
      })
      .catch(res =>
        fail !== null
          ? fail({ res: res.response, setResponse, ...props })
          : setResponse(res.response.data)
      )
      .finally(() => {
        loading.current = false
      })
  }

  return [response, fetch]
}

export default useApi
