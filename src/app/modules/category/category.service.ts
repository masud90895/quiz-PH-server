import { Category, Quiz } from '@prisma/client';
import prisma from '../../../shared/prisma';

// create category
const createCategory = async (payload: Category): Promise<Category> => {
  const result = await prisma.category.create({ data: payload });

  return result;
};

// export all category
const getAllCategory = async (): Promise<Category[]> => {
  const result = await prisma.category.findMany();

  return result;
};

//  category by id
const getCategoryById = async (id: string): Promise<Quiz[]> => {
  const result = await prisma.quiz.findMany({
    where: { categoryId: id },
    include: {
      createdBy: true,
      category: true,
      questions: true,
    },
  });
  return result;
};

// update category
const updateCategory = async (
  id: string,
  payload: Category
): Promise<Category> => {
  const result = await prisma.category.update({
    where: { id },
    data: payload,
  });

  return result;
};

// delete category
const deleteCategory = async (id: string): Promise<Category> => {
  const result = await prisma.category.delete({
    where: { id },
  });

  return result;
};

export const CategoryService = {
  createCategory,
  getAllCategory,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
