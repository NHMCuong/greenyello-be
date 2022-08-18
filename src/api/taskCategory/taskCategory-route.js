import Router from 'express'
import controller from './taskCategory-controller.js'
import asyncHandler from '../../common/async-handler.js'

const router = Router()

router.route('/').get(asyncHandler(controller.categories))
router.route('/add-category').post(asyncHandler(controller.addCategory))

export default router
