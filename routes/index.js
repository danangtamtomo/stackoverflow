var express = require('express')
var router = express.Router()
var UserController = require('../controllers/UserController')
var LocalStrategy = require('../strategies/LocalStrategy')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

router.post('/register', UserController.registerUser)

router.get('/auth/login', function (req, res) {
  res.send('Login Failure')
})


router.post('/auth/login', LocalStrategy.authenticate('local', {failureRedirect: '/auth/login'}), function (req, res, next) {
  res.send({token: req.user})
})

module.exports = router
