import React from 'react'
// import { useNavigate } from 'react-router-dom'

// import useTodos from '@/hooks/useTodos'
// import Loading from '@/components/Loading'
import * as criminals from '@/criminals.json'

function PagesJson() {
  const what = criminals

  return (
    <p>{what.items[0].title}</p>
  )
}

export default PagesJson

function PagesWantedIndex() {
  const navigate = useNavigate()
  const { data, error, isLoading } = useTodos()

  if (isLoading) return <Loading />
  if (error) return <div>There was an error fetching data</div>

  /// console.log(criminals)
  return (

    <div id="pages-wanted-index" className="container">
      <h1 className="text-center">Todos</h1>

      {
        data?.todos?.length === 0 ? (
          <div className="text-center">
            <p>No todos found</p>
          </div>
        ) : (
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Title</th>
                <th scope="col">Created At</th>
              </tr>
            </thead>
            <tbody>
              {
                data?.todos?.map((todo) => (
                  (
                    <tr key={todo.title} onClick={() => navigate(`/wanted/${todo.title}`)} style={{ cursor: 'pointer' }}>
                      <th scope="row">{todo.title}</th>

                    </tr>
                  )
                ))
              }
            </tbody>
          </table>
        )
      }
    </div>
  )
}

// export default PagesWantedIndex

/*  data?.todos?.map((todo) => (
                  <tr key={todo.id} onClick={() => navigate(`/wanted/${todo.id}`)} style={{ cursor: 'pointer' }}>
                    <th scope="row">{todo.id}</th>
                    <td>{todo.title}</td>
                    <td>{todo.createdAt}</td>
                  </tr>
                )) */
