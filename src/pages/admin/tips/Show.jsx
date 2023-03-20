import React from 'react'
import { useParams } from 'react-router-dom' // , Link

import Loading from '@/components/Loading'
import useAdminTip from '@/hooks/useAdminTip'

function PagesAdminTipsShow() {
  const { id } = useParams()
  const { data, error, isLoading } = useAdminTip(id)

  if (isLoading) return <Loading />
  if (error) return <div className="text-white text-center">There was an error fetching data</div>

  return (
    <div id="pages-admin-tips-show">
      <div>
        <div className="text-white text-center">
          <h1 className="text-4xl mb-10 underline">Anonymous Tip ID #{id}</h1>
          <h2 className="text-white">Name of criminal: {data?.criminalName}</h2>
          <h2 className="text-white">Details: {data?.description}</h2>
        </div>
      </div>
    </div>
  )
}

export default PagesAdminTipsShow
