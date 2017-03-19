'use strict'
module.exports = function (sequelize, DataTypes) {
  var Question = sequelize.define('Question', {
    title: DataTypes.STRING,
    questionContent: DataTypes.STRING,
    isNotifyToEmail: DataTypes.BOOLEAN,
    votes: DataTypes.INTEGER,
    views: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function (models) {
        // associations can be defined here
        models.Question.belongsTo(models.User)
        models.Question.hasMany(models.QuestionVote)
      }
    }
  })
  return Question
}
