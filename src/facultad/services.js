const { Programa, Facultad } = require('../db')

async function findAll () {
  return await Facultad.findAll()
}

async function findOne (id) {
  return await Facultad.findByPk(id, {
    include: [
      { model: Programa, required: false }
    ]
  })
}

async function create ({ data }) {
  const newFacultad = await Facultad.create(data)

  return newFacultad
}

module.exports = {
  findAll,
  findOne,
  create
}
