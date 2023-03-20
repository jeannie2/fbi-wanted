import React from 'react'
// import useCriminals from '@/hooks/useCriminals'
import useCyber from '@/hooks/old/useCyber'

function PagesCyber() {
  const data = useCyber()
  // const data = useCriminals()
  // const { getCyber } = useCriminals()
  // const data2 = getCyber()
  return (
    <section className="overflow-hidden text-neutral-700">
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
        <div className="-m-1 flex flex-wrap md:-m-2">

          {data.map((criminal) => (
            <div className="flex w-1/4 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={criminal.images[0].thumb}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PagesCyber

/*
    <p>{data[0].title}</p>

  <>
      <p>{data}</p>
     {getCyber().map((criminal) => (
         <td>{criminal.title}</td>
      )})

    </>

  criminals.items.map((criminal) => (
      <tr key={criminal.title}>
        <td>{criminal.title}</td>
      </tr>
    )) */
//  <p>{criminals.items[0].title}</p> */
