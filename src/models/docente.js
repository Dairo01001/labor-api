const { Model, DataTypes } = require('sequelize')

const DocenteModel = (sequelize) => {
  class Docente extends Model {}
  Docente.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true
      },
      nombre: DataTypes.STRING,
      dni: { type: DataTypes.INTEGER, unique: true, allowNull: false },
      imagen: { type: DataTypes.STRING }
    },
    { sequelize, modelName: 'Docente' }
  )
}

module.exports = DocenteModel
