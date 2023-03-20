import React from 'react'
import { useParams } from 'react-router-dom'

import useTodo from '@/hooks/old/useTodo'

import Loading from '@/components/Loading'

function PagesWantedShow() {
  const { id } = useParams()
  const { data, error, isLoading } = useTodo(id)

  if (isLoading) return <Loading />
  if (error) return <div>There was an error fetching data</div>

  return (
    <div id="pages-wanted-show" className="container">
      <div className="row">
        <div className="col-12 col-md-10 offset-md-1 text-center">
          <h1>Wanted {data?.todo?.id}</h1>
          <h2>{data?.todo?.title}</h2>
          <h2>{data?.todo?.createdAt}</h2>

          <ul className="list-group">
            {
              data?.todo?.TodoItems?.map((item) => (
                <li key={item.id} className={`list-group-item ${item.checked && 'text-decoration-line-through'}`}>{item.name}</li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PagesWantedShow
