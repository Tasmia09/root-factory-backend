import express from 'express'
import controller from '../controllers/factoryController'

const router = express.Router()
router.get('/getAll', controller.getAll)
//router.get(`/getRoot`, controller.getRoot)
//router.post(`/createRoot`, controller.createRoot)
//router.put(`/updateRoot/:id`, controller.updateRoot)
module.exports = router