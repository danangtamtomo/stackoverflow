var models = require('../models')
var jwt = require('jsonwebtoken')
var UserAuth = {}
require('dotenv').config()

UserAuth.isAuth = function (req, res, next) {
  jwt.verify(req.headers.authentication, process.env.JWT_SECRET, function (err, decoded) {
    if (err) {
      res.send({
        'status': err
      })
    } else {
      next()
    }
  })
}

UserAuth.profileAuth = function (req, res, next) {
  jwt.verify(req.headers.authentication, process.env.JWT_SECRET, function (err, decoded) {
    models.User.findById(decoded.id)
      .then(function (user) {
      if (user.role === 'admin') {
        next()
      } else {
        res.send({
          status: 'You should be admin to do this action'
        })
      }
    })
  })
}

module.exports = auths
