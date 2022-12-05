import Sequelize from 'sequelize'

export const sequelize = new Sequelize(
  'express_sequelize',
  'postgres',
  'kernel1swad',
  {
    host: 'localhost',
    dialect: 'postgres',
  }
)
