/* import React from 'react'
import { Link } from 'react-router-dom'

function PagesAnother() {
  return (
    <div id="pages-another" className="container">
      <header className="text-center border-bottom">
        <h1>Another Page</h1>
        <div><Link to="/">Home Page</Link></div>
      </header>
    </div>
  )
}

export default PagesAnother */

import React from 'react'
// import { useNavigate } from 'react-router-dom'

// import useTodos from '@/hooks/useTodos'
// import Loading from '@/components/Loading'
import useCriminals from '@/hooks/useCriminals'
import * as criminals from '@/criminals.json'

function PagesJson() {
  // const what = criminals

  const data = useCriminals()

  return (
    <p>{data}</p>
  /*  <section className="overflow-hidden text-neutral-700">
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
        <div className="-m-1 flex flex-wrap md:-m-2">

          {criminals.items.map((criminal) => (
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
    </section> */

  /*

  criminals.items.map((criminal) => (
      <tr key={criminal.title}>
        <td>{criminal.title}</td>
      </tr>
    )) */
  //  <p>{criminals.items[0].title}</p>

  )
}

export default PagesJson

/*

     <section className="overflow-hidden text-neutral-700">
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={criminals.items[0].images[0].large}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={criminals.items[1].images[0].large}
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={criminals.items[2].images[0].large}
              />
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={criminals.items[3].images[0].large}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={criminals.items[4].images[0].large}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={criminals.items[5].images[0].large}
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    */
