import useSWR from 'swr'

// import { fetcher } from '@/hooks/_utils'
import { fetcher, handleErrors } from '@/hooks/_utils'

const useTodos = () => {
  const { data, error, isLoading, isValidating } = useSWR('https://api.coinbase.com/v2/exchange-rates?currency=BTC', fetcher)
  //  const { data, error, isLoading, isValidating } = useSWR(`${process.env.API_URL}/api/wanted`, fetcher)
  return {
    data,
    error,
    isLoading,
    isValidating
  }
}

export default useTodos
