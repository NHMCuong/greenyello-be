import taskCategoryModel from "../../models/taskCategoryModel.js";

const categories = (async) => {
  return taskCategoryModel.findAll();
};

const category = async (id) => {
  return taskCategoryModel.findOne({
    where: {
      id,
    },
  });
};

const addCategory = async (category) => {
  return taskCategoryModel.create(category);
};
export default {
  categories,
  category,
  addCategory
};
