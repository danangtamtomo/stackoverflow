var models = require('../models')
var Question = models.Question
var QuestionVote = models.QuestionVote
var User = models.User
var Profile = models.Profile

var QuestionController = {}

QuestionController.getQuestions = function (req, res, next) {
  Question.findAll({
    include: [
      {
        model: QuestionVote
      },
      {
        model: User
      }
    ]
  })
    .then(function (questions) {
      if (!questions) {
        res.send({message: 'There are no questions'})
      }
      res.send(questions)
    })
}

QuestionController.getQuestion = function (req, res, next) {
  Question.findOne({
    where: {id: req.params.id},
    include: [
      {model: User, include: [{model: Profile}]}
    ]
  })
    .then(function (question) {
      res.send(question)
    })
}

QuestionController.createQuestion = function (req, res, next) {
  Question.create(req.body)
    .then(function (question) {
      res.send({
        status: 'Ok',
        message: 'New question has been created',
        question: question
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

QuestionController.updateQuestion = function (req, res, next) {
  Question.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(function (err, question) {
      res.send({
        status: 'Ok',
        message: `The question has been updated`,
        updated_question: question
      })
    })
}

QuestionController.deleteQuestion = function (req, res, next) {
  Question.remove({
    where: {
      id: req.params.id
    }
  })
    .then(function () {
      res.send({
        status: 'Ok',
        message: `The question has been deleted`
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

module.exports = QuestionController
