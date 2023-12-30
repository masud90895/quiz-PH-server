import express from 'express';
import { CategoryController } from './category.controller';

const router = express.Router();

// create category
router.post('/', CategoryController.createCategory);
// get all category
router.get('/', CategoryController.getAllCategory);
// category by id
router.get('/:id', CategoryController.getCategoryById);

export const CategoryRouter = router;
