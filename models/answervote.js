'use strict'
module.exports = function (sequelize, DataTypes) {
  var AnswerVote = sequelize.define('AnswerVote', {
    AnswerId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    voteType: DataTypes.STRING
  }, {
    classMethods: {
      associate: function (models) {
        // associations can be defined here
        models.AnswerVote.belongsTo(models.AnswerVote)
        models.AnswerVote.belongsTo(models.User)
      }
    }
  })
  return AnswerVote
}
