import React from 'react'
import { useParams } from 'react-router-dom'

import useCriminal from '@/hooks/useCriminal'
import CompToRender2 from '@/components/CompToRender2'

function PagesShow() {
  const { uid } = useParams()
  // const data = useCriminal(uid)
  const data = useCriminal(uid)
  //   const data = useCriminals(keyToSubject[subject])
  // const data = useCriminals("Cyber's Most Wanted"])

  console.log('IN THE SHOW PAGE') // why no log again

  return (
    <CompToRender2 data={data} />
  )
  //     <p>{id}</p>
  // return <CompToRender2 data={data} /> // same comp regardless
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

export default PagesShow
