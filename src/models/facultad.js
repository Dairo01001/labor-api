const { Model, DataTypes } = require('sequelize')

const FacultadModel = (sequelize) => {
  class Facultad extends Model {}
  Facultad.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true
      },
      nombre: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      }
    },
    { sequelize, modelName: 'Facultad' }
  )
}

module.exports = FacultadModel
