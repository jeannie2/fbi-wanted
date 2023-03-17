import * as criminals from '@/criminals.json'

// person may show up twice in diff categories
const useSeekingInfo = () => {
  const filter = 'Seeking Information'
  const result = criminals.items.filter((criminal) => criminal.subjects.includes(filter))
  console.log(result)
  return result
}

export default useSeekingInfo
