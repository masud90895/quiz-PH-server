import { Score } from '@prisma/client';
import prisma from '../../../shared/prisma';

// get quiz by category
const startQuizByCategory = async (): Promise<Score[]> => {
  const result = await prisma.score.findMany({
    include: { user: true },
  });

  return result;
};

// submit quiz
const submitQuiz = async (answers: Score): Promise<Score> => {
  const result = await prisma.score.create({
    data: answers,
  });
  return result;
};

// get score
const getScores = async (id: string): Promise<Score | null> => {
  const result = await prisma.score.findUnique({ where: { id } });
  return result;
};

export const QuizTakingService = {
  startQuizByCategory,
  submitQuiz,
  getScores,
};
