import { Questions } from '@prisma/client';
import prisma from '../../../shared/prisma';

// create questions
const createQuestions = async (payload: Questions): Promise<Questions> => {
  const result = await prisma.questions.create({ data: payload });

  return result;
};

// get all questions
const getAllQuestions = async (): Promise<Questions[]> => {
  const result = await prisma.questions.findMany();
  return result;
};

// get questions by id
const getQuestionsById = async (id: string): Promise<Questions> => {
  const result = await prisma.questions.findUnique({ where: { id } });
  return result as Questions;
};

// update questions
const updateQuestions = async (
  id: string,
  payload: Questions
): Promise<Questions> => {
  const result = await prisma.questions.update({
    where: { id },
    data: payload,
  });
  return result;
};

// delete questions
const deleteQuestions = async (id: string): Promise<Questions> => {
  const result = await prisma.questions.delete({ where: { id } });

  return result;
};

export const QuestionsService = {
  createQuestions,
  getAllQuestions,
  getQuestionsById,
  updateQuestions,
  deleteQuestions,
};
