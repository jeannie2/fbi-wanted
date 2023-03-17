import * as criminals from '@/criminals.json'

// person may show up twice in diff categories
const useViCAP = () => {
  const filter = 'ViCAP Missing Persons'
  const filter2 = 'ViCAP Unidentified Persons'
  const filter3 = 'ViCAP Homicides and Sexual Assaults'
  const result = criminals.items.filter((criminal) => criminal.subjects.includes(filter || filter2 || filter3))
  console.log(result)
  return result
}

export default useViCAP
