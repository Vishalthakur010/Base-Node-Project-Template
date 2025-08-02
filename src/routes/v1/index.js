const express = require('express')
const router = express.Router()

const {infoController, EmailController}=require('../../controllers')

router.get('/info', infoController.info)
router.post('/tickets', EmailController.create)

module.exports=router