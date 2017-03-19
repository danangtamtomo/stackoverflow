var models = require('../models')
var Answer = models.Answer
var AnswerVote = models.AnswerVote

var AnswerController = {}

AnswerController.getAnswers = function (req, res, next) {
  Answer.findAll({
    include: [{
      model: AnswerVote
    }]
  })
    .then(function (answers) {
      if (!answers) {
        res.send({message: 'There are no answers'})
      }
      res.send(answers)
    })
    .catch(function (err) {
      res.send({
        error: err.message
      })
    })
}

AnswerController.getAnswer = function (req, res, next) {
  Answer.findById(req.params.id)
    .then(function (answer) {
      res.send(answer)
    })
    .catch(function (err) {
      res.send(err.message)
    })
}

AnswerController.createAnswer = function (req, res, next) {
  Answer.create(req.body)
    .then(function (answer) {
      res.send({
        status: 'Ok',
        message: 'New answer has been created',
        answer: answer
      })
    })
    .catch(function (err) {
      res.send({
        status: 'Error',
        message: err.message
      })
    })
}

AnswerController.updateAnswer = function (req, res, next) {
  Answer.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(function (err, answer) {
      res.send({
        status: 'Ok',
        message: `The answer has been updated`,
        updated_answer: answer
      })
    })
}

AnswerController.deleteAnswer = function (req, res, next) {
  Answer.remove({
    where: {
      id: req.params.id
    }
  })
    .then(function () {
      res.send({
        status: 'Ok',
        message: `The answer has been deleted`
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

module.exports = AnswerController
