const express = require('express')
const router = express.Router()
const clientesController = require('../controllers/clientes')

router.get('/list', clientesController.list)
router.get('/news', clientesController.create)

module.exports = router
