import express from 'express';
import { CategoryController } from './category.controller';

const router = express.Router();

// create category
router.post('/', CategoryController.createCategory);
// get all category
router.get('/', CategoryController.getAllCategory);
// get all category for dropdown
router.get('/dropdown', CategoryController.getAllCategoryForDropdown);
// category by id
router.get('/:id', CategoryController.getCategoryById);
// update category
router.patch('/:id', CategoryController.updateCategory);
// delete category
router.delete('/:id', CategoryController.deleteCategory);

export const CategoryRouter = router;
