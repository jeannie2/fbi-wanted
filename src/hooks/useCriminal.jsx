import * as criminals from '@/criminals.json'

const useCriminal = (uid) => {
  const result = criminals.items.filter((criminal) => criminal.uid === uid)
  return result
}

export default useCriminal

// const caution = result[0].caution.replace('<p>', '').replace('</p>', '')
// const details = result[0].details.replace('<p>', '').replace('</p>', '')
// const remarks = result[0].remarks.replace('<p>', '').replace('</p>', '')

// result[0].caution.replace('<p>', '').replace('</p>', '')
// result[0].details.replace('<p>', '').replace('</p>', '')
// result[0].remarks.replace('<p>', '').replace('</p>', '')
// console.log(result)
// result[0].caution.replace('<p>', '').replace('</p>', '')
// result[0].details.replace('<p>', '').replace('</p>', '')
// const result2 = result[0].remarks.replace('<p>', '').replace('</p>', '')
