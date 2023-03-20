import useSWR from 'swr'

import { fetcher } from '@/hooks/_utils' // handleErrors

const useAdminTips = () => {
  const { data, error, isLoading, isValidating } = useSWR(`${process.env.API_URL}/api/admin/tips`, fetcher) // mutate

  return {
    data,
    error,
    isLoading,
    isValidating
  }
}

export default useAdminTips
