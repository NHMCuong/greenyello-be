import Router from 'express'
import taskCategory from './taskCategory/taskCategory-route.js'
import task from './task/task-route.js'

const router = Router()

// user API
//router.use('/api/v1/', user)
router.use('/api/category/', taskCategory)
router.use('/api/task/', task)
// router.use('/api/v1', setting)
// Handle 404 - page not found
router.use('*', (req, res, next) => {
  return res.status(404).json({
    code: 404,
    message: 'Page not found',
  })
})

export default router
