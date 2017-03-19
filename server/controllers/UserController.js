var models = require('../models')
var User = models.User
var Profile = models.Profile

var UserController = {}

UserController.getUsers = function (req, res, next) {
  User.findAll({
    include: [{
      model: Profile
    }]
  })
    .then(function (users) {
      if (!users) {
        res.send({message: 'There are no users'})
      }
      res.send(users)
    })
}

UserController.getUser = function (req, res, next) {
  User.findById(req.params.id)
    .then(function (user) {
      res.send(user)
    })
}

UserController.createUser = function (req, res, next) {
  User.create(req.body)
    .then(function (user) {
      res.send({
        status: 'Ok',
        message: 'New user has been created',
        user: user
      })
    })
    .catch(function (err) {
      console.log(err)
      res.send({
        status: 'Error',
        message: err.message
      })
    })
}

UserController.updateUser = function (req, res, next) {
  User.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(function (err, user) {
      res.send({
        status: 'Ok',
        message: `The user has been updated`,
        updated_user: user
      })
    })
}

UserController.deleteUser = function (req, res, next) {
  User.remove({
    where: {
      id: req.params.id
    }
  })
    .then(function () {
      res.send({
        status: 'Ok',
        message: `The user has been deleted`
      })
    })
    .catch(function (err) {
      if (err) {
        res.send({
          status: 'Error',
          message: err
        })
      }
    })
}

UserController.registerUser = function (req, res, next) {
  User.create({
    email: req.body.email,
    password: req.body.password
  })
    .then(function (user) {
      Profile.create({
        displayName: req.body.displayName,
        phone: req.body.phone
      })
        .then(function (profile) {
          user.setProfile(profile)
            .then(function () {
              res.send({
                status: 'Ok',
                message: 'Register is success'
              })
            })
        })
    })
    .catch(function (err) {
      res.send({
        status: 'Error',
        message: err.message
      })
    })
}
module.exports = UserController
