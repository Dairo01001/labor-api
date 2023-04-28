const { ProgramaRouter } = require('../programas')
const { FacultadRouter } = require('../facultad')
const { DocenteRouter } = require('../docente')
const { ActividadRouter } = require('../actividades')

const routes = require('express').Router()

routes.use('/programas', ProgramaRouter)
routes.use('/facultades', FacultadRouter)
routes.use('/docentes', DocenteRouter)
routes.use('/actividades', ActividadRouter)

module.exports = {
  routes
}
