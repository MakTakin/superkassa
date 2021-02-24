const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080
const statusRouter = require('./routers/status')
const db = require('./database/database')

const app = express()

app.use(bodyParser.json());

app.use(cors())

app.use('/',statusRouter)

async function start() {
    try {
        await db.sync()
        await app.listen(PORT, function () {
            console.log(`Server listens http://localhost:${PORT}`)
        })
    } catch (e) {
        console.log(e)
    }
}

start()