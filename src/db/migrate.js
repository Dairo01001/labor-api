const { connection } = require('./index')

connection.sync({ force: true }).then(() => {
  console.log('Sync complete')
})
