import React from 'react'
import { useParams, Link } from 'react-router-dom'

import Loading from '@/components/Loading'
import useMyTip from '@/hooks/useMyTip'

function PagesMyTipsShow() {
  const { id } = useParams()
  const { data, error, isLoading } = useMyTip(id)

  if (isLoading) return <Loading />
  if (error) return <div>There was an error fetching data</div>

  return (
    <div id="pages-my-tips-show" className="container">
      <div className="row">
        <div className="text-white text-center">
          <h1>Anonymous Tip{data?.tip?.id}</h1>
          <h2>{data?.tip?.title}</h2>
          <h2>{data?.tip?.createdAt}</h2>
        </div>
      </div>
    </div>
  )
}

export default PagesMyTipsShow
