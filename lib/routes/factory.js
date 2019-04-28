import express from 'express'
import controller from '../controllers/factoryController'

const router = express.Router()
router.get('/getAll', controller.getAll)
router.get('/getFactory', controller.getFactory)
router.post('/createFactory', controller.createFactory)
router.put('/updateFactory/:id', controller.updateFactory)
router.delete('/deleteFactory/:id', controller.deleteFactory)
module.exports = router