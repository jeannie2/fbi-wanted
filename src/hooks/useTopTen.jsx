import * as toptencriminals from '@/topTen.json'

const useTopTen = (filter) => {
  // console.log(filter)
  const result = toptencriminals.items.filter((item) => item.subjects.includes(filter))
  // const result = toptencriminals
  console.log(result.items) // works
  return result
}

export default useTopTen
