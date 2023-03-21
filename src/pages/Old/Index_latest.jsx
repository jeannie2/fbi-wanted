import React from 'react'
import { useParams } from 'react-router-dom'

// import * as topTen from '@/topTen.json'
// import useTopTen from '@/hooks/useTopTen'
import useCriminals from '@/hooks/useCriminals'
// import useKidnapMissing from '@/hooks/useKidnapMissing'
// CHETANBHAI, ruja, ROSALES, YULAN,alexis, CARDENAS, arnoldo, pratt, VILLARREAL, CARO-QUINTERO
import CompToRender from '@/components/CompToRender'

const keyToSubject = {
  cyber: "Cyber's Most Wanted",
  kidnapmissing: 'Kidnappings and Missing Persons',
  counterintelligence: 'Counterintelligence',
  seekinginfo: 'Seeking Information',
  additional: 'Additional Violent Crimes',
  cei: 'Criminal Enterprise Investigations'
}

function PagesIndex() {
  const { subject } = useParams()

  const data = useCriminals(keyToSubject[subject])
  /* if (subject === 'topten') {
    data = useTopTen(keyToSubject[subject])
  } */
  // const data = useCriminals("Cyber's Most Wanted"])

  console.log('IN THE INDEX')

  return <CompToRender data={data} /> // same comp regardless
  // const CompTo
  //  const data = useKidnapMissing()

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

export default PagesIndex

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
