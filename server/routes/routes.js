const { main, room } = require('../controller/defaultController')



const router = require('express').Router()


router.get('/',main)
router.get('/api/rooms',room)


module.exports = router