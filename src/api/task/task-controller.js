import repository from './task-repository.js'
import taskCategoryRepository from '../taskCategory/taskCategory-repository.js'

const allTasks = async (req, res) => {
  try {
    const data = await repository.allTasks()
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

const task = async (req, res) => {
  try {
    const { task_id } = req.params
    const data = await repository.task(task_id)
    if (!data) {
      return res.status(404).json({
        code: 404,
        message: 'ID not found',
        data: {},
      })
    }
    return res.status(200).json({
      code: 200,
      message: 'Login success',
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

const addTask = async (req, res) => {
  try {
    const { body } = req
    const category = await taskCategoryRepository.category(body.category_id)
    if (!category) {
      return res.status(404).json({
        code: 404,
        message: 'Category not found',
        data: {},
      })
    }
    const task = {
      categoryId: body.category_id,
      name: body.name,
    }
    await repository.addTask(task)

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

const updateTask = async (req, res) => {
  try {
    const { body } = req
    const { task_id } = req.params

    const checkTask = await repository.task(task_id)
    if (!checkTask) {
      return res.status(404).json({
        code: 404,
        message: 'Task not found',
        data: {},
      })
    }
    const task = {
      categoryId: body.category_id,
      name: body.name,
      completed: body.completed,
    }
    await repository.updateTask(task, task_id)

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

const deleteTask = async (req, res) => {
  try {
    const { task_id } = req.params
    const data = await repository.task(task_id)
    if (!data) {
      return res.status(404).json({
        code: 404,
        message: 'ID not found',
        data: {},
      })
    }
    await repository.deleteTask(task_id)
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
  allTasks,
  task,
  addTask,
  updateTask,
  deleteTask,
}