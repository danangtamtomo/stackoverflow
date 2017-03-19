'use strict'
const crypto = require('crypto')

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    salt: DataTypes.STRING,
    facebook_id: DataTypes.STRING,
    google_id: DataTypes.STRING
  }, {
    classMethods: {
      associate: function (models) {
        // associations can be defined here
        models.User.hasMany(models.Question)
        models.User.hasOne(models.Profile)
        models.User.hasMany(models.Answer)
      }
    },
    instanceMethods: {
      validPassword: function (password) {
        const hash = crypto.createHmac('sha256', password)
          .update(this.salt)

        if (this.password !== hash.digest('hex')) {
          return false
        }

        return true
      }
    },
    hooks: {
      beforeCreate: function (user) {
        var salt = crypto.randomBytes(10).toString('hex')
        const password = user.password
        const hash = crypto.createHmac('sha256', password)
          .update(salt)
        user.password = hash.digest('hex')
        user.salt = salt
      }
    }
  })
  return User
}
