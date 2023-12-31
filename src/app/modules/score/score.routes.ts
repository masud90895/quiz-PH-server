import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { ScoreController } from './score.controller';

const router = express.Router();

// create quiz Score
router.post(
  '/',
  auth(ENUM_USER_ROLE.PERFORMER, ENUM_USER_ROLE.ADMIN),
  ScoreController.createScore
);
// get all quiz score
router.get('/', ScoreController.allScore);
router.get('/:userId', ScoreController.getScores);

export const QuizScore = router;
