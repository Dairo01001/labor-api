const { Model, DataTypes } = require('sequelize')

const ProgramaModel = (sequelize) => {
  class Programa extends Model {}
  Programa.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true
      },
      nombre: { type: DataTypes.STRING, unique: true, allowNull: false }
    },
    { sequelize, modelName: 'Programa' }
  )
}

module.exports = ProgramaModel
