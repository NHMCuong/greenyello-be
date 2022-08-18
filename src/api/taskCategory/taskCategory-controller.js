import repository from './taskCategory-repository.js'

const categories = async (req, res) => {
  try {
    const data = await repository.categories()
    return res.status(200).json({
      code: 200,
      message: 'Success',
      data,
    })
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: 'Internal server error',
      data: {},
    })
  }
}

const addCategory = async (req, res) => {
  try {
    const { body } = req
    const category = {
      id: body.id,
      name: body.name,
    }
    await repository.addCategory(category)

    return res.status(200).json({
      code: 200,
      message: 'Success',
    })
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: 'Internal server error',
      data: {},
    })
  }
}

export default {
  categories,
  addCategory
}
