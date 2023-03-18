import React from 'react'
import { useNavigate } from 'react-router-dom'

/* const surprise = () => {
  console.log('SURPRISE')
} */
// ok to naviate from cimponent? solution example was bc didnt use component, all code was in page

function CompToRender(data) {
  const navigate = useNavigate()

  return (
    <section className="overflow-hidden text-neutral-700">
      <div className="container mx-auto px-5 py-2 lg:px-20 lg:pt-12">
        <div className="-m-1 flex flex-wrap md:-m-2">

          {data.data.map((criminal) => (
            <div key={criminal.uid} className="flex w-2/4 md:w-1/3 lg:w-1/4 flex-wrap">
              <div className="w-full p-1 mb-16 lg:mb-9 md:p-2">
                <img
                  alt="gallery"
                  data-id={criminal.uid}
                  onClick={() => navigate(`/show/${criminal.uid}`)}
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={criminal.images[0].thumb}
                />
                <figcaption className="text-center bg-black text-white p-1">{criminal.title}</figcaption>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CompToRender

/* return (
    <div className="text-center">
      <Spinner animation="border" />
    </div>
  ) */
// console.log(data)
// console.log(data.data[0].title) // works. not data.index or data[0]
/* return (
  // <p>{data.data[0].title}</p> //works
    data.data.map((item) => (
      <tr key={item.title}>
        <td>{item.title}</td>
      </tr>
    ))

  ) */
