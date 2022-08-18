import Joi from "joi";

const task = {
  param: {
    task_id: Joi.number()
      .integer()
      .positive()
      .required(),
  },
};


const addTask = {
  body: {
    category_id: Joi.number()
      .integer()
      .positive()
      .required(),
    name: Joi.string().required(),
  },
};

const updateTask = {
  body: {
    category_id: Joi.number()
      .integer()
      .positive()
      .required(),
    name: Joi.string().required(),
    completed: Joi.boolean().required(),
  },
  param: {
    task_id: Joi.number()
      .integer()
      .positive()
      .required(),
  },
};

export default { task, addTask, updateTask };
