var express = require('express')
var router = express.Router()
const UserController = require('../controllers/UserController')

/* GET users listing. */
router.get('/', UserController.getUsers)
router.get('/:id', UserController.getUser)
router.post('/', UserController.createUser)
router.put('/:id', UserController.updateUser)
router.delete('/:id', UserController.deleteUser)

module.exports = router
