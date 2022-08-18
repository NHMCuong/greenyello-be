import Sequelize from 'sequelize'
import sequelizeInstance from '../common/squelize.js'

const taskCategoryModel = sequelizeInstance.define('task_categories', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    field: 'id',
  },
  name: {
    type: Sequelize.STRING,
    field: 'name',
    allowNull: false,
  },
})

export default taskCategoryModel
