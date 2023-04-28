const {
  Docente,
  Programa,
  Actividad,
  Facultad,
  ActividadDocente
} = require('../db')

async function findAll () {
  return await Actividad.findAll()
}

async function findOne (id) {
  return await Actividad.findByPk(id, {
    include: [
      {
        model: Docente,
        required: false,
        include: [
          {
            model: Programa,
            required: false,
            include: [{ model: Facultad, required: false }]
          }
        ]
      }
    ]
  })
}

async function addDocente ({ DocenteId, ActividadId }) {
  const actividadDocente = ActividadDocente.create({ ActividadId, DocenteId })

  return actividadDocente
}

async function create ({ data }) {
  const newActividad = await Actividad.create(data)

  return newActividad
}

module.exports = {
  findAll,
  findOne,
  create,
  addDocente
}
