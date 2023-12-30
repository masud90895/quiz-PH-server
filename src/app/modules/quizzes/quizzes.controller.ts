import { Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';

import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { QuizService } from './quizzes.service';

// create quiz
const createQuiz: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await QuizService.createQuiz(req.body);
    console.log(req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Quiz created successfully',
      data: result,
    });
  }
);
// get all quiz
const getAllQuiz: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await QuizService.getAllQuiz();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Quizzes fetched successfully',
      data: result,
    });
  }
);

// get quiz by id
const getQuizById: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    console.log(req.params.quizId);

    const result = await QuizService.getQuizById(req.params.quizId);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Quiz fetched successfully',
      data: result,
    });
  }
);
//  update quiz
const updateQuiz: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await QuizService.updateQuiz(req.params.quizId, req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Quiz updated successfully',
      data: result,
    });
  }
);
// delete quiz
const deleteQuiz: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await QuizService.deleteQuiz(req.params.quizId);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Quiz deleted successfully',
      data: result,
    });
  }
);


export const QuizController = {
  createQuiz,
  getAllQuiz,
  getQuizById,
  updateQuiz,
  deleteQuiz,
};
