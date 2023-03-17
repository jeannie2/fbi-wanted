import prisma from '../../_helpers/prisma.js'
import handleErrors from '../../_helpers/handle-errors.js'

const controllersApiCriminalsIndex = async (req, res) => {
  try {
    const { params: { subjects } } = req

    const foundCriminals = await prisma.wanted.findMany({
      where: {
        data: {
          path: ['subjects'],
          equals: subjects
        }
      }
    })
    return res.status(200).json(foundCriminals)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiCriminalsIndex
