import express from 'express';
import { AuthRouter } from '../modules/auth/user.routes';
import { QuizRouter } from '../modules/quizzes/quizzes.routes';
import { CategoryRouter } from '../modules/category/category.routes';
import { QuizScore } from '../modules/score/score.routes';
import { QuestionsRouter } from '../modules/questions/questions.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    routes: AuthRouter,
  },
  {
    path: '/quizzes',
    routes: QuizRouter,
  },
  {
    path: '/category',
    routes: CategoryRouter,
  },
  {
    path: '/score',
    routes: QuizScore,
  },
  {
    path: '/questions',
    routes: QuestionsRouter,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
