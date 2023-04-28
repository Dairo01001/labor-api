const DocenteRouter = require('express').Router()
const DocenteService = require('./services')

DocenteRouter.post('/', async (req, res) => {
  const { nombre, dni, imagen, ProgramaId } = req.body

  try {
    const docente = await DocenteService.create({
      data: { nombre, dni, imagen, ProgramaId }
    })
    res.status(201).json(docente)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
})

DocenteRouter.get('/', async (req, res) => {
  const { nombre } = req.query
  if (nombre) {
    return res.json(await DocenteService.findByName({ nombre }))
  }
  res.json(await DocenteService.findAll())
})

DocenteRouter.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const docente = await DocenteService.findOne(id)

    if (!docente) {
      return res.status(401).json({ msg: 'Docente not found!' })
    }

    res.json(docente)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
})

module.exports = {
  DocenteRouter
}
