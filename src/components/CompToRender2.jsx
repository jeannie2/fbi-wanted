import React from 'react'

// change to card
// need "key or data-key for first div?"
// conditional, topten, check image in card, formik, search input
//      <div className="h-48 lg:h-auto lg:w-5/12 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: `url(${data.data[0].images[0].thumb})` }} title="Woman holding a mug" />
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
            <li className="text-gray-700 text-base"><span className="font-bold">DOB: </span> {data.data[0].dates_of_birth_used ? 'NILE' : 'WON' }</li>
            <li className="text-gray-700 text-base"><span className="font-bold">Place of birth: </span>{data.data[0].place_of_birth}</li>
            <li className="text-gray-700 text-base"><span className="font-bold">Sex: </span>{data.data[0].sex}</li>
            <li className="text-gray-700 text-base">Height: {data.data[0].height_min} - {data.data[0].height_max} </li>
            <li className="text-gray-700 text-base">Weight: {data.data[0].weight}</li>
            <li className="text-gray-700 text-base">Race: {data.data[0].race}</li>
            <li className="text-gray-700 text-base">Nationality: {data.data[0].nationality}</li>
            <li className="text-gray-700 text-base">Remarks: {data.data[0].remarks}</li>
            <li className="text-gray-700 text-base">Details: {data.data[0].details}</li>
            <li className="text-gray-700 text-base">Caution: {data.data[0].caution}</li>
            <li className="text-gray-700 text-base">Reward: {data.data[0].reward_text}</li>
            <li className="text-gray-700 text-base">Field office: {data.data[0].field_offices}</li>
          </ul>
        </div>
        <div className="flex items-center">
          <img className="w-10 h-10 rounded-full mr-4" src="/img/jonathan.jpg" alt="Avatar of Jonathan Reinink" />
          <div className="text-sm">
            <p className="text-gray-900 leading-none">Submit an anonymous tip online</p>
          </div>
        </div>
      </div>
    </div>
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
