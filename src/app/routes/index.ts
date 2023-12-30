import express from 'express';
import { AuthRouter } from '../modules/auth/user.routes';
import { QuizRouter } from '../modules/quizzes/quizzes.routes';
import { CategoryRouter } from '../modules/category/category.routes';

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
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
