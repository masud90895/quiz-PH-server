import { Prisma, Questions, Quiz } from '@prisma/client';
import { shuffleArray } from '../../../helpers/shuffleArray';
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
const getQuizById = async (id: string): Promise<Quiz | null> => {
  const result = await prisma.quiz.findUnique({
    where: { id },
    include: {
      createdBy: true,
      category: true,
      questions: true,
    },
  });

  if (result) {
    // Shuffle order of questions
    shuffleArray(result.questions);

    // Shuffle options for each question
    result.questions.forEach(question => {
      shuffleArray(question.options);
    });
  }

  console.log(result, 'result');

  return result;
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

// create quiz questions
const createQuizQuestions = async (
  payload: Prisma.QuestionsCreateInput
): Promise<Questions> => {
  const result = await prisma.questions.create({
    data: payload,
  });
  return result;
};

// update quiz questions
const updateQuizQuestions = async (
  id: string,
  payload: Prisma.QuizUpdateInput
): Promise<Questions> => {
  const result = await prisma.questions.update({
    where: { id },
    data: payload,
  });
  return result;
};

// get last quiz questions
const getLastQuizQuestions = async (id: string): Promise<Questions[]> => {
  const result = await prisma.questions.findMany({
    where: { quizId: id },
    include: {
      quiz: true,
    },
  });
  return result;
};

// get question by id
const getQuestion = async (id: string): Promise<Questions | null> => {
  const result = await prisma.questions.findUnique({ where: { id } });
  return result;
};

export const QuizService = {
  createQuiz,
  getAllQuiz,
  getQuizById,
  updateQuiz,
  deleteQuiz,
  createQuizQuestions,
  updateQuizQuestions,
  getLastQuizQuestions,
  getQuestion,
};
