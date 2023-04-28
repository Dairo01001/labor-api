const { Op } = require('sequelize')
const { Docente, Programa, Actividad, Facultad } = require('../db')

async function findAll () {
  return await Docente.findAll()
}

async function findOne (id) {
  return await Docente.findByPk(id, {
    include: [
      {
        model: Programa,
        required: false,
        include: [{ model: Facultad, required: false }]
      },
      { model: Actividad, required: false }
    ]
  })
}

async function findByName ({ nombre }) {
  return await Docente.findAll({
    where: {
      nombre: { [Op.like]: `%${nombre}%` }
    }
  })
}

async function create ({ data }) {
  const newFacultad = await Docente.create(data)

  return newFacultad
}

module.exports = {
  findAll,
  findOne,
  create,
  findByName
}
