import React, { createContext, useContext } from 'react'
import axios from 'axios'
import { AuthContext } from './auth'
import { baseURL } from '../util/fetcher'

const FetchContext = createContext()
const { Provider } = FetchContext

const FetchProvider = ({ children }) => {
  const { authState } = useContext(AuthContext)

  const authAxios = axios.create({
    baseURL
  })

  authAxios.interceptors.request.use(
    (config) => {
      config.headers.Authorization = `Bearer ${authState.token}`
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  authAxios.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      const code = error && error.response ? error.response.status : 0
      if (code === 401 || code === 403) {
        console.log('error code', code)
      }
      return Promise.reject(error)
    }
  )

  return (
    <Provider
      value={{
        authAxios
      }}
    >
      {children}
    </Provider>
  )
}

export { FetchContext, FetchProvider }
