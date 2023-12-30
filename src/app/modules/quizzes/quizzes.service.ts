import { Prisma, Quiz } from '@prisma/client';
import prisma from '../../../shared/prisma';

// create quiz
const createQuiz = async (payload: Prisma.QuizCreateInput): Promise<Quiz> => {
  console.log(payload, 'payload');
  const result = await prisma.quiz.create({
    data: payload,
  });
  return result;
};

//  get all quiz
const getAllQuiz = async (): Promise<Quiz[]> => {
  const result = await prisma.quiz.findMany({
    include: {
      createdBy: true,
      category: true,
      questions: true,
    },
  });
  return result;
};

// get quiz by id
const getQuizById = async (id: string): Promise<Quiz> => {
  const result = await prisma.quiz.findUnique({
    where: { id },
    include: {
      createdBy: true,
      category: true,
      questions: true,
    },
  });
  return result as Quiz;
};

//  update quiz
const updateQuiz = async (
  id: string,
  payload: Prisma.QuizUpdateInput
): Promise<Quiz> => {
  const result = await prisma.quiz.update({
    where: { id },
    data: payload,
  });
  return result;
};

// delete quiz
const deleteQuiz = async (id: string): Promise<Quiz> => {
  await prisma.questions.deleteMany({ where: { quizId: id } });
  const result = await prisma.quiz.delete({ where: { id } });

  return result;
};

export const QuizService = {
  createQuiz,
  getAllQuiz,
  updateQuiz,
  deleteQuiz,
  getQuizById,
};
