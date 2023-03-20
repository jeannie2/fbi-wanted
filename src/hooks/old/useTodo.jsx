import useSWR from 'swr'

import { fetcher } from '@/hooks/_utils'

const useTodos = (id) => {
  const { data, error, isLoading, isValidating } = useSWR(id ? `${process.env.API_URL}/api/wanted/${id}` : null, fetcher)

  return {
    data,
    error,
    isLoading,
    isValidating
  }
}

export default useTodos
