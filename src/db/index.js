const { Sequelize } = require('sequelize')
const { DATABASE_URL } = require('../config')
const initModels = require('../models')

const sequelize = new Sequelize(DATABASE_URL, {})

const authenticate = async () => {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

authenticate()
initModels(sequelize)

const { Actividad, Docente, Facultad, Programa } = sequelize.models

Programa.hasMany(Docente)
Docente.belongsTo(Programa)

Facultad.hasMany(Programa)
Programa.belongsTo(Facultad)

Actividad.belongsToMany(Docente, { through: 'ActividadDocente' })
Docente.belongsToMany(Actividad, { through: 'ActividadDocente' })

const { ActividadDocente } = sequelize.models

module.exports = {
  Actividad,
  Docente,
  Facultad,
  Programa,
  ActividadDocente,
  connection: sequelize
}
