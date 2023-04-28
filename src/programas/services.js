const { Programa, Facultad, Docente } = require('../db')

async function findAll () {
  return await Programa.findAll()
}

async function findOne (id) {
  return await Programa.findByPk(id, {
    include: [
      { model: Facultad, required: false },
      { model: Docente, required: false }
    ]
  })
}

async function create ({ data }) {
  const newPrograma = await Programa.create(data)

  return newPrograma
}

module.exports = {
  findAll,
  findOne,
  create
}
