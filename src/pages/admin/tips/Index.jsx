import React from 'react'
import { useNavigate } from 'react-router-dom'

import Loading from '@/components/Loading'
import useAdminTips from '@/hooks/useAdminTips'

function PagesAdminTipsIndex() {
  const navigate = useNavigate()
  const { data, error, isLoading } = useAdminTips()

  if (isLoading) return <Loading />
  if (error) return <div className="text-center text-white">There was an error fetching data</div>

  return (
    <div id="pages-admin-tips-index" className="container">
      <h1 className="text-center text-white text-5xl mb-10 underline">ALL SUBMITTED TIPS</h1>

      {
        data?.tips?.length === 0 ? (
          <div className="text-center">
            <p className="text-white">No tips found</p>
          </div>
        ) : (
          <table className="w-4/6 text-white mx-auto border border-white">
            <thead>
              <tr>
                <th scope="col">Tip ID #</th>
                <th scope="col">Name of criminal</th>
                <th scope="col">Details</th>
              </tr>
            </thead>
            <tbody>
              {
                data?.map((tip) => (
                  <tr className="border border-white text-center" key={tip.id} onClick={() => navigate(`/admin/tips/${tip.id}`)} style={{ cursor: 'pointer' }}>
                    <th scope="col" className="text-white">{tip.id}</th>
                    <td className="text-white">{tip.criminalName}</td>
                    <td className="text-white">{tip.description}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        )
      }
    </div>
  )
}

export default PagesAdminTipsIndex
