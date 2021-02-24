const Sequelize = require('sequelize')
const db = require('../database/database')
const Status = db.define('status', {
    value: {
        type: Sequelize.TEXT,
    }
}, {timestamps: false})

module.exports = Status