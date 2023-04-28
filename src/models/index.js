const initModels = (sequelize) => {
  require('./actividad')(sequelize)
  require('./docente')(sequelize)
  require('./facultad')(sequelize)
  require('./programas')(sequelize)
}

module.exports = initModels
