const {Sequelize} = require('sequelize')

const db = new Sequelize('superdb', 'postgres', 'ahjyn123', {
  dialect: 'postgres'
})

module.exports = db