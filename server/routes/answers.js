/**
 * Created by hacktiv8 on 3/19/17.
 */
var express = require('express')
var router = express.Router()
const AnswerController = require('../controllers/AnswerController')

router.get('/', AnswerController.getAnswers)
router.get('/:id', AnswerController.getAnswer)
router.post('/', AnswerController.createAnswer)
router.put('/:id', AnswerController.updateAnswer)
router.delete('/:id', AnswerController.deleteAnswer)

module.exports = router

