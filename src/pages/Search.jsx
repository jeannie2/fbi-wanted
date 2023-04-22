import React, { useState } from 'react'
// import List from '@/components/List'

function PagesSearch() {
  const [inputText, setInputText] = useState('')
  const inputHandler = (e) => {
    // convert input text to lower case
    const lowerCase = e.target.value.toLowerCase()
    setInputText(lowerCase)
  }

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
    </div>
  )
}

export default PagesSearch

/*
      </div>
      <List input={inputText} />
    </div> */
