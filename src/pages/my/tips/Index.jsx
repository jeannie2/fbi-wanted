import React from 'react'
import { useNavigate } from 'react-router-dom'

import Loading from '@/components/Loading'
import useMyTips from '@/hooks/useMyTips'

function PagesMyTipsIndex() {
  const navigate = useNavigate()
  const { data, error, isLoading } = useMyTips()

  if (isLoading) return <Loading />
  if (error) return <div>There was an error fetching data</div>

  return (
    <div id="pages-my-tips-index text-white" className="container">
      <h1 className="text-center">All Tips</h1>

      {
        data?.tips?.length === 0 ? (
          <div className="text-center">
            <p>No tips found</p>
          </div>
        ) : (
          <table className="table table-hover text-white">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Title</th>
                <th scope="col">Created At</th>
              </tr>
            </thead>
            <tbody>
              {
                data?.tips?.map((tip) => (
                  <tr key={tip.id} onClick={() => navigate(`/my/tips/${tip.id}`)} style={{ cursor: 'pointer' }}>
                    <th scope="row">{tip.id}</th>
                    <td>{tip.title}</td>
                    <td>{tip.createdAt}</td>
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

export default PagesMyTipsIndex

// onClick={() => navigate(`/show/${todo.uid}`)} or name
