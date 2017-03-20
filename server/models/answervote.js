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
        AnswerVote.belongsTo(models.Answer)
        AnswerVote.belongsTo(models.User)
      }
    }
  })
  return AnswerVote
}
