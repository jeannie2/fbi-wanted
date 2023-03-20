import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import { handleErrors } from '@/hooks/_utils'

const useTips = () => {
  const navigate = useNavigate()

  const apiCreateTip = (user) => axios({
    method: 'POST',
    url: `${process.env.API_URL}/api/tips`,
    data: user
  }).then((resp) => {
    navigate(`/tips/submitted?tipId=${resp.data.id}`)
  }).catch(handleErrors)

  return {
    apiCreateTip
  }
}

export default useTips
