import { Category } from '@prisma/client';
import prisma from '../../../shared/prisma';

// create category
const createCategory = async (payload: Category): Promise<Category> => {
  const result = await prisma.category.create({ data: payload });

  return result;
};

export const CategoryService = {
  createCategory,
};