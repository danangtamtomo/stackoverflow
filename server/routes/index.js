var express = require('express')
var router = express.Router()
var UserController = require('../controllers/UserController')
var LocalStrategy = require('../strategies/LocalStrategy')
var jwt = require('jsonwebtoken')
require('dotenv')
  .config()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express'
  })
})

router.post('/register', UserController.registerUser)

router.get('/auth/login', function(req, res) {
  res.send({
    message: 'Login Failure'
  })
})


router.post('/auth/login', LocalStrategy.authenticate('local', {
  failureRedirect: '/auth/login'
}), function(req, res, next) {
  var token = jwt.sign({
    user: req.user.id
  }, process.env.JWT_SECRET)
  req.user.getProfile()
    .then(function(userProfile) {
      res.send({
        message: 'Login success, welcome ' + userProfile.displayName,
        token: token,
      })
    })
})

module.exports = router