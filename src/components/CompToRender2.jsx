import React from 'react'
import { Link } from 'react-router-dom'

import ImageGallery from '@/components/ImageGallery'
// need "key or data-key for first div?"
function CompToRender2(data) {
  console.log(data) // eslint-disable-line
  return (
    <section>
      <div id="CompToRender2" className="max-w-sm lg:max-w-4xl lg:flex mx-auto text-white translate-y-12">
        <div className=" h-48 lg:h-auto lg:w-5/12 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden " title="photo">
          {data.data[0].images.length > 1 ? <ImageGallery data={data.data[0]} /> : <img className="lg:w-[300px] lg:h-[400px] mt-5 mx-auto animate__animated animate__zoomIn" src={data.data[0].images[0].thumb} /> }

        </div>

        <div className="p-4 flex flex-col justify-between leading-normal -m-2 w-full">
          <div className="mb-8">
            <div className="glow font-bold text-2xl lg:text-4xl mb-2 typing-text">{data.data[0].title}</div>
            <ul>
              {data.data[0].dates_of_birth_used && (<li className="glow my-2 typing-text text-base lg:text-lg"><span className="font-bold">DOB: </span> {data.data[0].dates_of_birth_used[0]} </li>) }
              {data.data[0].place_of_birth && (<li className="glow my-2 typing-text text-base lg:text-lg"><span className="font-bold">POB: </span>{data.data[0].place_of_birth} </li>) }
              {data.data[0].sex && (<li className="glow my-2 typing-text text-base lg:text-lg"><span className="font-bold">Sex: </span>{data.data[0].sex} </li>) }
              {data.data[0].race && (<li className="glow my-2 typing-text text-base lg:text-lg"><span className="font-bold">Race: </span>{data.data[0].race} </li>) }
              {data.data[0].nationality && (<li className="glow my-2 typing-text text-base lg:text-lg"><span className="font-bold">Nationality: </span>{data.data[0].nationality} </li>) }
              <li className="glow typing-text text-base lg:text-lg"><span className="font-bold ">Field office: </span> {data.data[0].field_offices} </li>

              {data.data[0].remarks && (
                <details className="glow duration-300">
                  <summary className="glow bg-inherit px-5 py-3 text-base lg:text-xl cursor-pointer">Remarks</summary>
                  <div className="glow px-5 py-3 border border-cyan-100 text-base font-light">
                    <p>{data.data[0].remarks}</p>
                  </div>
                </details>
              ) }

              {data.data[0].details && (
                <details className="glow duration-300">
                  <summary className="glow bg-inherit px-5 py-3 text-base lg:text-xl cursor-pointer">Details</summary>
                  <div className="glow px-5 py-3 border border-cyan-100 text-base font-light">
                    <p>{data.data[0].details}</p>
                  </div>
                </details>
              ) }

              {data.data[0].caution && (
                <details className="glow duration-300">
                  <summary className="glow bg-inherit px-5 py-3 text-base lg:text-xl cursor-pointer ">Caution</summary>
                  <div className="glow px-5 py-3 border border-cyan-100 text-base font-light">
                    <p>{data.data[0].caution}</p>
                  </div>
                </details>
              ) }

              {data.data[0].reward_text && (
                <details className="glow duration-300">
                  <summary className="glow bg-inherit px-5 py-3 text-base lg:text-xl cursor-pointer ">Reward</summary>
                  <div className="glow px-5 py-3 border border-cyan-100 text-base font-light">
                    <p>{data.data[0].reward_text}</p>
                  </div>
                </details>
              ) }

              <div className="glow flex items-center mt-3">
                <div className="text-sm">
                  <Link to="/tips/new" className="leading-none text-base lg:text-lg hover:underline">Submit an anonymous tip online</Link>
                </div>
              </div>

            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompToRender2
// <img className="lg:w-[300px] lg:h-[400px] mt-5 mx-auto animate__animated animate__zoomIn" src={data.data[0].images[0].thumb} />
// <p className="text-white">{data.data[0].images.length}</p>
// jsx {undefined} wont execute
// original: {data.data[0].race !== null ? (<li className="glow my-2 typing-text text-base lg:text-lg"><span className="font-bold">Race: </span>{data.data[0].race}</li>) : '' }
// https://codebeautify.org/html-stripper
