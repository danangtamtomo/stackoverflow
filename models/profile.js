'use strict'
module.exports = function (sequelize, DataTypes) {
  var Profile = sequelize.define('Profile', {
    displayName: DataTypes.STRING,
    phone: DataTypes.STRING,
    aboutMe: DataTypes.STRING,
    profilePicture: DataTypes.STRING,
    reputation: DataTypes.INTEGER,
    websiteLink: DataTypes.STRING,
    company: DataTypes.STRING,
    lastSeen: DataTypes.DATE,
    profileViews: DataTypes.INTEGER,
    visited: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function (models) {
        // associations can be defined here
        models.Profile.belongsTo(models.User)
      }
    }
  })
  return Profile
}
