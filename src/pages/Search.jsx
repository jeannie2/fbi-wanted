// import React from 'react'
import React, { useState } from 'react'
// import { React, useState } from 'react'
import List from '@/components/List'

function PagesSearch() {
  console.log('SEARCH PAGE')
  const [inputText, setInputText] = useState('')
  const inputHandler = (e) => {
    // convert input text to lower case
    const lowerCase = e.target.value.toLowerCase()
    setInputText(lowerCase)
  }

  /* <input type="text" onChange={handleFilterSubmit} id="search-navbar" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." /> */

  return (
    <div className="main text-center mt-5">
      <h1 id="searchText" className="text-white text-lg">ENTER NAME</h1>
      <div className="search">
        <input
          type="text"
          id="outlined-basic"
          onChange={inputHandler}
          label="Search"
          className="pl-2 rounded"
        />

      </div>
      <List input={inputText} />
    </div>
  )
}

export default PagesSearch
