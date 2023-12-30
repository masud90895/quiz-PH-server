import express from 'express';
import { QuestionsController } from './questions.controller';

const router = express.Router();

// create questions
router.post('/', QuestionsController.createQuestions);
// get all questions
router.get('/', QuestionsController.getAllQuestions);
// questions by id
router.get('/:id', QuestionsController.getQuestionsById);
// update questions
router.patch('/:id', QuestionsController.updateQuestions);
// delete questions
router.delete('/:id', QuestionsController.deleteQuestions);

export const QuestionsRouter = router;