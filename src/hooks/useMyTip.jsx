import useSWR from 'swr'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'

import { fetcher } from '@/hooks/_utils' // , handleErrors

const useMyTip = (id) => {
  // const navigate = useNavigate()
  const { data, error, isLoading, isValidating } = useSWR(id ? `${process.env.API_URL}/api/my/tips/${id}` : null, fetcher) // mutate

  return {
    data,
    error,
    isLoading,
    isValidating
  }
}

export default useMyTip
