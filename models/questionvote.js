'use strict'
module.exports = function (sequelize, DataTypes) {
  var QuestionVote = sequelize.define('QuestionVote', {
    QuestionId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    voteType: DataTypes.STRING
  }, {
    classMethods: {
      associate: function (models) {
        // associations can be defined here
        models.QuestionVote.belongsTo(models.User)
        models.QuestionVote.belongsTo(models.Question)
      }
    }
  })
  return QuestionVote
}
