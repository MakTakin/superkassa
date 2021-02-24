const Router = require('express')
const router = Router()
const Status = require('../models/status')


router.get('/', async (req, res) => {
    try {
        const value = await Status.findAll()
        res.status(200).json(value)
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Server error'
        })
    }
})

router.post('/toggle', async (req, res) => {
    console.log(req.body)
    try {
        await Status.update({
            value: req.body.status},
            {
                where: {
                    id: 1
                }
            }
        )
        res.sendStatus(200)
    } catch
        (e) {
        console.log(e)
        res.status(500).json({
            message: 'Server error'
        })
    }
})

module.exports = router