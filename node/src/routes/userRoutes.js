//IMPORTAÇÕES
const express           = require('express')
const router            = express.Router()
const userController    = require('../controllers/userController')

//DIRECIONAMENTO PARA MÓDULOS DENTRO DA USERCONTROLLER
router.get('/', userController.index)
router.get('/registrar', userController.register)
router.get('/login', userController.login)

//EXPORTA ROUTER
module.exports = router