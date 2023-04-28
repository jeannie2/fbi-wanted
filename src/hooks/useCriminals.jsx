import * as criminals from '@/criminals.json'

const useCriminals = (filter) => {
  const result = criminals.items.filter((criminal) => criminal.subjects.includes(filter))
  console.log(result)
  return result
}

export default useCriminals
