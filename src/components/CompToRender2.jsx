import React from 'react'

// change to card
// need "key or data-key for first div?"
// <div className="h-48 lg:h-auto lg:w-5/12 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: `url(${data.data[0].images[0].thumb})` }} title="Woman holding a mug" />
function CompToRender2(data) {
  return (
    <div className="max-w-sm lg:max-w-4xl lg:flex m-auto">
      <div className="h-48 lg:h-auto lg:w-5/12 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
        <img className="w-[300px] h-[400px]" src={data.data[0].images[0].thumb} />
      </div>

      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">

          <div className="text-gray-900 font-bold text-xl mb-2">{data.data[0].title}</div>
          <ul>
            {data.data[0].dates_of_birth_used !== null ? (<li className="text-gray-700 text-base my-2"><span className="font-bold">DOB: </span> {data.data[0].dates_of_birth_used} </li>) : '' }
            {data.data[0].place_of_birth !== null ? (<li className="text-gray-700 text-base my-2"><span className="font-bold">Place of birth: </span>{data.data[0].place_of_birth}</li>) : '' }
            {data.data[0].sex !== null ? (<li className="text-gray-700 text-base my-2"><span className="font-bold">Sex: </span>{data.data[0].sex}</li>) : '' }
            {data.data[0].race !== null ? (<li className="text-gray-700 text-base my-2"><span className="font-bold">Race: </span>{data.data[0].race}</li>) : '' }
            {data.data[0].nationality !== null ? (<li className="text-gray-700 text-base my-2"><span className="font-bold">Nationality: </span>{data.data[0].nationality}</li>) : '' }
            {data.data[0].remarks !== null ? (<li className="text-gray-700 text-base my-2"><span className="font-bold">Remarks: </span>{data.data[0].remarks}</li>) : '' }
            {data.data[0].details !== null ? (<li className="text-gray-700 text-base my-2"><span className="font-bold">Details: </span>{data.data[0].details}</li>) : '' }
            {data.data[0].caution !== null ? (<li className="text-gray-700 text-base my-2"><span className="font-bold">Caution: </span>{data.data[0].caution}</li>) : '' }
            {data.data[0].reward_text !== null ? (<li className="text-gray-700 text-base my-2"><span className="font-bold">Reward: </span>{data.data[0].reward_text}</li>) : '' }
            <li className="text-gray-700 text-base"><span className="font-bold">Field office: </span> {data.data[0].field_offices} </li>
          </ul>
        </div>
        <div className="flex items-center">
          <div className="text-sm">
            <p className="text-gray-900 leading-none">Submit an anonymous tip online</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompToRender2
//   <!--<li className="text-gray-700 text-base">Height: {data.data[0].height_min} - {data.data[0].height_max} </li> -->

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
