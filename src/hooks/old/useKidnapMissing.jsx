import * as criminals from '@/criminals.json'

// person may show up twice in diff categories
const useKidnapMissing = () => {
  const filter = 'Kidnappings and Missing Persons'
  const result = criminals.items.filter((criminal) => criminal.subjects.includes(filter))
  console.log(result)
  return result
}

export default useKidnapMissing
