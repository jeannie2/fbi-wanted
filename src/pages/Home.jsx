import React from 'react'
import { Link } from 'react-router-dom'
// import useTodos from '@/hooks/useTodos'

function PagesHome() {
  return (
    <div id="pages-home" className="container">
      <header className="text-center border-bottom">
        <h1>FBI Most Wanted</h1>
        <div><Link to="/another">Enter</Link></div>
        <div><Link to="/wanted/index">Here</Link></div>

      </header>
    </div>
  )
}

export default PagesHome/* import React from 'react'

import Loading from '@/components/Loading'
import useCoinbase from '@/hooks/useCoinbase'

function PagesHome() {
  const { data, error, isLoading } = useCoinbase()

  if (isLoading) return <Loading />
  if (error) return <h2 className="text-center">There was an error fetching data</h2>

  return (
    <tbody>
      <tr>
        <th>Name</th>
        <th>Brand</th>
        <th>Image</th>
        <th>Price</th>
        <th>Rating</th>
      </tr>
      {data.map((item, index) => (
        <tr key={index}>
          <td>{item.title}</td>
        </tr>
      ))}
    </tbody>
  )
}

export default PagesHome

/*
<h2>Rates for {data.data.currency}</h2>
      <ul>
        {
         // data
         //  Object.keys(data.title).sort().map((key) => (<li key={key}>{key}: {data.data.rates[key]}</li>))
         Object.keys(data.data.rates).sort().map((key) => (<li key={key}>{key}: {data.data.rates[key]}</li>))
        }
      </ul>

      import React from 'react'
import { Link } from 'react-router-dom'
// import useTodos from '@/hooks/useTodos'

function PagesHome() {
  return (
    <div id="pages-home" className="container">
      <header className="text-center border-bottom">
        <h1>FBI Most Wanted</h1>
        <div><Link to="/another">Enter</Link></div>

      </header>
    </div>
  )
}

export default PagesHome

// hide layoutsNavbar
 */
