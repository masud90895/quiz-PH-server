import express from 'express';

const router = express.Router();

const moduleRoutes = [{ path: '/auth', routes: require('./auth').default }];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
