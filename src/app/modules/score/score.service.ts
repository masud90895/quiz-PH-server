import { Score } from '@prisma/client';
import prisma from '../../../shared/prisma';

// create quiz Score
const createScore = async (answers: Score): Promise<Score> => {
  const result = await prisma.score.create({
    data: answers,
  });
  return result;
};

// get quiz by category
const startQuizByCategory = async (): Promise<Score[]> => {
  const result = await prisma.score.findMany({
    include: {
      user: true,
      quiz: true,
    },
  });

  return result;
};

// get score
const getScores = async (id: string): Promise<Score | null> => {
  const result = await prisma.score.findUnique({ where: { id } });
  return result;
};

export const ScoreServices = {
  startQuizByCategory,
  createScore,
  getScores,
};
