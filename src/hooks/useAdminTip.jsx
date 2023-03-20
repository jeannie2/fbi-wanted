import useSWR from 'swr'

import { fetcher } from '@/hooks/_utils' // , handleErrors

// keep swr?
const useAdminTip = (id) => {
  const { data, error, isLoading, isValidating } = useSWR(id ? `${process.env.API_URL}/api/admin/tips/${id}` : null, fetcher) // mutate

  return {
    data,
    error,
    isLoading,
    isValidating
  }
}

export default useAdminTip

/*
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'

const useAdminTip = (id) => {
  // const navigate = useNavigate()

  const apiCreateTip = (id) => axios({
    method: 'GET',
    url: `${process.env.API_URL}/api/tip/${id}`,
    data: tip
  })
  return {
    apiCreateTip
  }
}

export default useAdminTip

  // const navigate = useNavigate()
  */
