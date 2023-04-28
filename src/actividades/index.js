const ActividadRouter = require('express').Router()
const ActividadService = require('./services')

ActividadRouter.post('/', async (req, res) => {
  const { nombre, descripcion, intensidadHoraria, semestre } = req.body

  try {
    const actividad = await ActividadService.create({
      data: { nombre, descripcion, intensidadHoraria, semestre }
    })
    res.status(201).json(actividad)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
})

ActividadRouter.get('/', async (req, res) => {
  res.json(await ActividadService.findAll())
})

ActividadRouter.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const actividad = await ActividadService.findOne(id)

    if (!actividad) {
      return res.status(401).json({ msg: 'Actividad not found!' })
    }

    res.json(actividad)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
})

ActividadRouter.put('/', async (req, res) => {
  const { DocenteId, ActividadId } = req.body
  try {
    if (DocenteId && ActividadId) {
      const actividad = await ActividadService.addDocente({
        DocenteId,
        ActividadId
      })

      return res.json(actividad)
    }

    res.json(req.body)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
})

module.exports = {
  ActividadRouter
}
