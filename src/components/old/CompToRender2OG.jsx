import React from 'react'

// change to card
function CompToRender2(data) {
  return (
    <section className="overflow-hidden text-neutral-700">
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
        <div className="-m-1 flex flex-wrap md:-m-2">

          <div key={data.data[0].uid} className="flex w-1/4 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                data-id={data.data[0].uid}
                className="block h-full w-full rounded-lg object-cover object-center"
                src={data.data[0].images[0].thumb}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default CompToRender2
// data.data.uid no work
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
