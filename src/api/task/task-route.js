import Router from "express";
import validate from "express-validation";
import controller from "./task-controller.js";
import asyncHandler from "../../common/async-handler.js";
import validation from "./task-validation.js";

const router = Router();

router
  .route("/")
  .get(asyncHandler(controller.allTasks));

router
  .route("/:task_id")
  .get(validate(validation.task), asyncHandler(controller.task));

router
  .route("/add_task")
  .post(validate(validation.addTask), asyncHandler(controller.addTask));

router
  .route("/update_task/:task_id")
  .put(validate(validation.updateTask), asyncHandler(controller.updateTask));

router
  .route("/delete_task/:task_id")
  .delete(validate(validation.task), asyncHandler(controller.deleteTask));

export default router;
