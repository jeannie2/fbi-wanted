import * as criminals from '@/criminals.json'

// const initialState = criminals.items
const useCriminals = (filter) => {
  // const getCyber = () => {
  // let filteredList = criminals

  // const filter = {
  //   subject: '',
  //   age: {
  //     min: 30,
  //     max: 50
  //   }
  // }

  // if (filter.subject) {
  //   filteredList = filteredList.filter((criminal) => criminal.subjects.includes(filter.subject))
  // }

  // if (filter.age?.min) {
  //   filteredList = filteredList.filter((criminal) => criminal.age_min >= filter.age.min)
  // }

  // if (filter.age?.max) {
  //   filteredList = filteredList.filter((criminal) => criminal.age_max >= filter.age.max)
  // }

  const result = criminals.items.filter((criminal) => criminal.subjects.includes(filter))
  console.log(result)
  return result
}

// person may show up twice in diff categories

// const result = criminals.items.filter((criminal) => criminal.person_classification === filter)

// return result
// var string = ''
// const filter = "Cyber's Most Wanted"
// const filterByTags = ["Cyber's Most Wanted"]
// const filterByTagSet = new Set(filterByTags)

// const result = initialState.filter((o) => o.tags.some((tag) => filterByTagSet.has(tag)))
// const filteredResult = initialState.filter((item) => (item.subjects.indexOf(filter) >= 0))

// return filteredResult
// const result = criminals.items.filter((x.items) => x.items.sex === 'Female')
// const result = criminals.filter((criminal) => criminal.sex === 'Female')
// const result = criminals.items[0].title

// const result = Object.values(criminals).filter((criminals.item) => criminals.item.sex === 'female')
// console.log(result) // [{id: 'idA', markdown: 'markdownA'}]
//  return result

/* return {
    getCyber
  }
} */

const useCriminalsOG = () => {
  // checkCriminals = criminals.filter(criminal => criminal.sex == "female")
  function filterByGender(item) {
    if (item.sex === 'female') {
      return true
    }
  }

  const arrByID = criminals.items.filter(filterByGender)

  return arrByID
  // console.log(arrByID)
  // return arrByID
}

// criminals.items[0].title
/* criminals. //filter part
   return {
    data

  } */

export default useCriminals
