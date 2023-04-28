const { Model, DataTypes } = require('sequelize')

const ActividadModel = (sequelize) => {
  class Programa extends Model {}
  Programa.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true
      },
      nombre: DataTypes.STRING,
      descripcion: DataTypes.STRING,
      intensidadHoraria: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      semestre: {
        type: DataTypes.STRING
      }
    },
    { sequelize, modelName: 'Actividad' }
  )
}

module.exports = ActividadModel
