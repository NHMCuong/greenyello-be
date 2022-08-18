import Sequelize from 'sequelize'
import sequelizeInstance from '../common/squelize.js'

const taskModel = sequelizeInstance.define('tasks', {
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
  categoryId: {
    type: Sequelize.INTEGER,
    field: 'category_id',
    allowNull: false,
  },
  completed: {
    type: Sequelize.BOOLEAN,
    field: 'completed',
    defaultValue: false,
  },
})

export default taskModel
