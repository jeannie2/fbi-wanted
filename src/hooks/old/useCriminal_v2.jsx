import * as criminals from '@/criminals.json'

const useCriminal = (uid) => {
  const result = criminals.items.filter((criminal) => criminal.uid === uid)
  return result
}

export default useCriminal
