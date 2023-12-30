import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { QuizController } from './quizzes.controller';

const router = express.Router();

// create quiz
router.post('/', auth(ENUM_USER_ROLE.ADMIN), QuizController.createQuiz);
// get all quiz
router.get('/', QuizController.getAllQuiz);
// get quiz by id
router.get('/:quizId', QuizController.getQuizById);
// create quiz questions
router.post('/question', QuizController.createQuizQuestions);
// get last quiz questions
router.get('/question/:quizId', QuizController.getLastQuizQuestions);
// get question by id
router.get('/question-id/:questionId', QuizController.getQuestion);
// update quiz questions
router.patch('/question/:questionId', QuizController.updateQuizQuestions);
// update quiz
router.patch('/:quizId', auth(ENUM_USER_ROLE.ADMIN), QuizController.updateQuiz);
// delete quiz
router.delete(
  '/:quizId',
  auth(ENUM_USER_ROLE.ADMIN),
  QuizController.deleteQuiz
);

export const QuizRouter = router;
