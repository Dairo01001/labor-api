const ProgramaRouter = require('express').Router()
const ProgramaService = require('./services')

ProgramaRouter.post('/', async (req, res) => {
  const { nombre, FacultadId } = req.body

  try {
    const programa = await ProgramaService.create({
      data: { nombre, FacultadId }
    })
    res.status(201).json(programa)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
})

ProgramaRouter.get('/', async (req, res) => {
  res.json(await ProgramaService.findAll())
})

ProgramaRouter.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const programa = await ProgramaService.findOne(id)

    if (!programa) {
      return res.status(401).json({ msg: 'Programa not found!' })
    }

    res.json(programa)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
})

module.exports = {
  ProgramaRouter
}
