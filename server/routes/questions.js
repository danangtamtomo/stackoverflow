/**
 * Created by hacktiv8 on 3/19/17.
 */
var express = require('express')
var router = express.Router()
const QuestionController = require('../controllers/QuestionController')

router.get('/', QuestionController.getQuestions)
router.get('/:id', QuestionController.getQuestion)
router.post('/', QuestionController.createQuestion)
router.put('/:id', QuestionController.updateQuestion)
router.delete('/:id', QuestionController.deleteQuestion)
router.post('/vote', QuestionController.voteQuestion)
router.get('/vote/count/:id', QuestionController.countVote)

module.exports = router