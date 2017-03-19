var passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy,
  models = require('../models'),
  User = models.User,
  jwt = require('jsonwebtoken')
require('dotenv').config()

passport.use(new LocalStrategy({
  usernameField: 'email',
  passReqToCallback: true
},
  function (req, email, password, done) {
    User.findOne({
      where: {
        email: email
      }
    })
      .then(function (user) {
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' })
        }
        if (!user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect password.' })
        }
        return done(null, user)
      })
      .catch(function (err) {
        console.log(err)
      })
  }
))

passport.serializeUser(function (user, cb) {
  var token = jwt.sign({ user: user.email }, process.env.JWT_SECRET)
  cb(null, token)
})

module.exports = passport
