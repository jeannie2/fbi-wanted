import * as criminals from '@/criminals.json'

const useCriminal = (uid) => {
  const result = criminals.items.filter((criminal) => criminal.uid === uid)
  console.log(result)
  return result
}

export default useCriminal

// goal: topten, vicap, card, implement search bar
