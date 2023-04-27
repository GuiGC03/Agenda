const express = require('express')
const router = express.Router()
const AgendaController = require('../controllers/AgendaController')

router.get('/add', AgendaController.createAgenda)
router.post('/add', AgendaController.createAgendasave)
router.post('/remove', AgendaController.removeAgenda)
router.get('/edit/:id', AgendaController.updateAgenda)
router.post('/edit', AgendaController.updateAgendaPost)
router.post('/updatestatus', AgendaController.toggleAgendastatus)
router.get('/', AgendaController.showAgendas)

module.exports = router
