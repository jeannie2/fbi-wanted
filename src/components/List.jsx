import React from 'react' // , { useState }
// import data from '@/list.json'
import * as data from '@/criminals.json'
import { useNavigate } from 'react-router-dom'
// how to top ten as well?

function List(props) {
  const navigate = useNavigate()

  // create a new array by filtering the original array
  // const result = criminals.items.filter((criminal) => criminal.uid === uid)
  const filteredData = data.items.filter((el) => {
    // if no input the return the original
    if (props.input === '') {
      return el
    }
    // return the item which contains the user input
    // console.log(el)
    return el.title.toLowerCase().includes(props.input)
  })

  return (
  // <ul>
    <section id="search-section" className="overflow-hidden text-neutral-700">
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
        <div className="-m-1 flex flex-wrap md:-m-2">

          {filteredData.map((item) => ( // vs data.data.map in CompToRender.jsx
            //   {data.data.map((criminal) => (
            <div key={item.uid} className="flex w-2/4 md:w-1/3 lg:w-1/4 flex-wrap animate__animated animate__fadeIn">
              <div className="w-full p-1 mb-16 lg:mb-9 md:p-2">
                <img
                  alt="gallery"
                  data-id={item.uid}
                  onClick={() => navigate(`/show/${item.uid}`)}
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={item.images[0].thumb}
                />
                <figcaption className="text-center bg-black text-white p-1">{item.title}</figcaption>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  // </ul>
  )
}

export default List
