import useSWR from 'swr'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'

import { fetcher } from '@/hooks/_utils' // handleErrors

const useMyTips = () => {
  // const navigate = useNavigate()
  const { data, error, isLoading, isValidating } = useSWR(`${process.env.API_URL}/api/my/tips`, fetcher) // mutate

  return {
    data,
    error,
    isLoading,
    isValidating
  }
}

export default useMyTips
