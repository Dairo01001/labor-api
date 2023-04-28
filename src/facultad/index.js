const FacultadRouter = require('express').Router()
const FacultadService = require('./services')

FacultadRouter.post('/', async (req, res) => {
  const { nombre } = req.body

  try {
    const facultad = await FacultadService.create({
      data: { nombre }
    })
    res.status(201).json(facultad)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
})

FacultadRouter.get('/', async (req, res) => {
  res.json(await FacultadService.findAll())
})

FacultadRouter.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const facultad = await FacultadService.findOne(id)

    if (!facultad) {
      return res.status(401).json({ msg: 'Facultad not found!' })
    }

    res.json(facultad)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
})

module.exports = {
  FacultadRouter
}
