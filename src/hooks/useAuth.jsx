import axios from 'axios'
import useSWR from 'swr'
import { useNavigate } from 'react-router-dom'

import { fetcher, handleErrors } from '@/hooks/_utils'

const useAuth = () => {
  const navigate = useNavigate()
  const { data, error, isLoading, isValidating, mutate } = useSWR(`${process.env.API_URL}/api/my/profile`, fetcher, {
    revalidateOnFocus: false,
    shouldRetryOnError: false
  })

  const apiSignup = (user) => axios({
    method: 'POST',
    url: `${process.env.API_URL}/api/auth/signup`,
    data: user
  }).then(() => {
    mutate() // switch order: navigate first
    navigate('/admin/tips')
  }).catch(handleErrors)

  const apiLogin = (user) => axios({
    method: 'POST',
    url: `${process.env.API_URL}/api/auth/login`,
    data: user
  }).then(() => {
    mutate() // switch order: navigate first
    navigate('/admin/tips')
  }).catch(handleErrors)

  const apiLogout = () => axios({
    method: 'DELETE',
    url: `${process.env.API_URL}/api/auth/logout`
  }).then(() => {
    // force set the data to undefined
    // because just revalidation will not remove cache data
    // switched order to navigate first then navigate
    navigate('/auth/login')
    mutate(undefined)
  }).catch(handleErrors)

  return {
    data,
    error,
    isLoading,
    isValidating,
    apiSignup,
    apiLogin,
    apiLogout
  }
}

export default useAuth
