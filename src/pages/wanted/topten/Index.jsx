import React from 'react'
// import { useParams } from 'react-router-dom'

// there is no params unlike index/:cyber.

// import * as topTen from '@/topTen.json'
import useTopTen from '@/hooks/useTopTen'
// import useCriminals from '@/hooks/useCriminals'
// import useKidnapMissing from '@/hooks/useKidnapMissing'
// CHETANBHAI, ruja, ROSALES, YULAN,alexis, CARDENAS, arnoldo, pratt, VILLARREAL, CARO-QUINTERO
import CompToRender from '@/components/CompToRender'

const keyToSubject = {
  topten: 'Ten Most Wanted Fugitives'
}

function PagesTopTen() {
  const subject = window.location.href.split('/').reverse()[0] // not useParams(). not const {subject}
  // const data = useTopTen(keyToSubject[subject]) //
  const data = useTopTen('Ten Most Wanted Fugitives')
  console.log('IN THE TOPTEN')

  return <CompToRender data={data} /> // same comp regardless
  // const PagesIndex = () => {
  /* return (
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
  ) */
}

export default PagesTopTen

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
