import React from 'react'
// import useCriminals from '@/hooks/useCriminals'
import useViCAP from '@/hooks/old/useViCAP'

function PagesViCAP() {
  const data = useViCAP()

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

export default PagesViCAP
