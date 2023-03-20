import React from 'react'
import { Link } from 'react-router-dom'

// change to card
// need "key or data-key for first div?"
// <div className="h-48 lg:h-auto lg:w-5/12 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: `url(${data.data[0].images[0].thumb})` }} title="Woman holding a mug" />
function CompToRenderTopTen(data) {
  console.log('TOP TEN TOP TEN')
  console.log(data)

  return (
    <section className="h-screen">
      <div id="CompToRender2" className="max-w-sm lg:max-w-5xl lg:flex m-auto text-cyan-100 glow translate-y-12">
        <div className="glow h-48 lg:h-auto lg:w-5/12 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden " title="photo">
          <img className="lg:w-[300px] lg:h-[400px] mt-16 mx-auto animate__animated animate__zoomIn" src={data.data[0].images[0].thumb} />
        </div>

        <div className="p-4 flex flex-col justify-between leading-normal mt-10 w-full">
          <div className="mb-8">
            <div className="glow font-bold text-2xl lg:text-4xl mb-2 typing-text">{data.data[0].title}</div>
            <ul>
              {data.data[0].dates_of_birth_used !== null ? (<li className="glow my-2 typing-text text-base lg:text-xl"><span className="font-bold">DOB: </span> {data.data[0].dates_of_birth_used} </li>) : '' }
              {data.data[0].place_of_birth !== null ? (<li className="glow my-2 typing-text text-base lg:text-xl"><span className="font-bold">POB: </span>{data.data[0].place_of_birth}</li>) : '' }
              {data.data[0].sex !== null ? (<li className="glow my-2 typing-text text-base lg:text-xl"><span className="font-bold">Sex: </span>{data.data[0].sex}</li>) : '' }
              {data.data[0].race !== null ? (<li className="glow my-2 typing-text text-base lg:text-xl"><span className="font-bold">Race: </span>{data.data[0].race}</li>) : '' }
              {data.data[0].nationality !== null ? (<li className="glow my-2 typing-text text-base lg:text-xl"><span className="font-bold">Nationality: </span>{data.data[0].nationality}</li>) : '' }
              <li className="glow typing-text text-base lg:text-xl"><span className="font-bold ">Field office: </span> {data.data[0].field_offices} </li>

              {data.data[0].remarks !== null ? (
                <details className="glow duration-300">
                  <summary className="glow bg-inherit px-5 py-3 text-base lg:text-xl cursor-pointer">Remarks</summary>
                  <div className="glow px-5 py-3 border border-cyan-100 text-base font-light">
                    <p>{data.data[0].remarks}</p>
                  </div>
                </details>
              ) : '' }

              {data.data[0].details !== null ? (
                <details className="glow duration-300">
                  <summary className="glow bg-inherit px-5 py-3 text-base lg:text-xl cursor-pointer">Details</summary>
                  <div className="glow px-5 py-3 border border-cyan-100 text-base font-light">
                    <p>{data.data[0].details}</p>
                  </div>
                </details>
              ) : '' }

              {data.data[0].caution !== null ? (
                <details className="glow duration-300">
                  <summary className="glow bg-inherit px-5 py-3 text-base lg:text-xl cursor-pointer ">Caution</summary>
                  <div className="glow px-5 py-3 border border-cyan-100 text-base font-light">
                    <p>{data.data[0].caution}</p>
                  </div>
                </details>
              ) : '' }

              {data.data[0].reward_text !== null ? (
                <details className="glow duration-300">
                  <summary className="glow bg-inherit px-5 py-3 text-base lg:text-xl cursor-pointer ">Reward</summary>
                  <div className="glow px-5 py-3 border border-cyan-100 text-base font-light">
                    <p>{data.data[0].reward_text}</p>
                  </div>
                </details>
              ) : '' }

              <div className="glow flex items-center mt-3">
                <div className="glow text-sm">
                  <Link to="/tips/new" className="leading-none text-base lg:text-xl">Submit an anonymous tip online</Link>
                </div>
              </div>

            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompToRenderTopTen

/* //<p href="" className="leading-none">Submit an anonymous tip online</p>
 li className="text-gray-700 text-base">Height: {data.data[0].height_min} - {data.data[0].height_max} </li> */

/*
   <li className="text-gray-700 text-base"><span className="font-bold">DOB: </span> {data.data[0].dates_of_birth_used.length === 1 ? data.data[0].dates_of_birth_used : 'NIL' }</li>
 <li className="text-gray-700 text-base"><span className="font-bold">Sex: </span>{data.data[0].sex}</li>
            <li className="text-gray-700 text-base">Race: {data.data[0].race}</li>
            <li className="text-gray-700 text-base">Nationality: {data.data[0].nationality}</li>
            <li className="text-gray-700 text-base">Remarks: {data.data[0].remarks}</li>
            <li className="text-gray-700 text-base">Details: {data.data[0].details}</li>
            <li className="text-gray-700 text-base">Caution: {data.data[0].caution}</li>
            <li className="text-gray-700 text-base">Reward: {data.data[0].reward_text}</li>
            <li className="text-gray-700 text-base">Field office: {data.data[0].field_offices}</li>
   */
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

// https://codebeautify.org/html-stripper
