import * as criminals from '@/criminals.json'

// person may show up twice in diff categories
const useAdditional = () => {
  const filter = 'Additional Violent Crimes'
  const result = criminals.items.filter((criminal) => criminal.subjects.includes(filter))
  console.log(result)
  return result
}

export default useAdditional
