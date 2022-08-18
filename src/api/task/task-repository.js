import taskModel from "../../models/taskModel.js";

const allTasks = (async) => {
  return taskModel.findAll();
};

const task = async (task_id) => {
  return taskModel.findOne({
    where: {
      id: task_id,
    },
  });
};

const addTask = async (task) => {
  return taskModel.create(task);
};

const updateTask = async (task, id) => {
  return taskModel.update(task, {
    where: {
      id: id,
    },
  });
};

const deleteTask = async (id) => {
  return taskModel.destroy({
    where: {
      id: id,
    },
  });
};

export default {
  task,
  addTask,
  updateTask,
  deleteTask,
  allTasks,
};
