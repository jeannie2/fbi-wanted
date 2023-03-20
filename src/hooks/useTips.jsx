import useSWR from 'swr'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import { fetcher, handleErrors } from '@/hooks/_utils'

const useTips = () => {
  const navigate = useNavigate()
  const { data, error, isLoading, isValidating, mutate } = useSWR(`${process.env.API_URL}/api/tips/new`, fetcher)

  const apiCreateTip = (user) => axios({
    method: 'POST',
    url: `${process.env.API_URL}/api/tips/new`,
    data: user
  }).then((resp) => {
    mutate()
    navigate('/tips/new/submitted') // QQ    navigate(`/my/todos/${resp.data.todo.id}`)
  }).catch(handleErrors)
  return {
    data,
    error,
    isLoading,
    isValidating,
    apiCreateTip
  }
}

export default useTips
