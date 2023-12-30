import express from 'express';
import { CategoryController } from './category.controller';

const router = express.Router();

// create category
router.post('/', CategoryController.createCategory);

export const CategoryRouter = router;
