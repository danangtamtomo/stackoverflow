'use strict'
module.exports = function (sequelize, DataTypes) {
  var Answer = sequelize.define('Answer', {
    UserId: DataTypes.INTEGER,
    QuestionId: DataTypes.INTEGER,
    answerContent: DataTypes.STRING
  }, {
    classMethods: {
      associate: function (models) {
        // associations can be defined here
        Answer.belongsTo(models.User)
      }
    }
  })
  return Answer
}
