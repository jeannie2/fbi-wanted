import * as topTen from '@/topTen.json'

const useTopTen = (filter) => {
  // console.log(filter)
  const result = topTen.items.filter((item) => item.subjects.includes(filter))
  // const result = toptencriminals
  console.log(`result${result}`)
  // console.log(result.items) // works
  return result
}

export default useTopTen
