import useSWR from 'swr'
import axios from 'axios'

const fetcher = (url) => axios.get(url).then((res) => res.data)

const useWanted = () => {
  const { data, error, isLoading } = useSWR('https://api.fbi.gov/@wanted?pageSize=50', fetcher)
  // console.log(data)
  return {
    data,
    error,
    isLoading
  }
}

export default useWanted
