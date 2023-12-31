import { Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';

import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { ScoreServices } from './score.service';

// create quiz Score
const createScore: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { userId } = req.user as { userId: string };

    const answers = req.body;
    answers.userId = userId;
   
    const result = await ScoreServices.createScore(answers);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Quiz Taking fetched successfully',
      data: result,
    });
  }
);

// get all quiz score

const allScore: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await ScoreServices.startQuizByCategory();
    console.log(req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Score created successfully',
      data: result,
    });
  }
);

const getScores: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await ScoreServices.getScores(req.params.userId);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Score fetched successfully',
      data: result,
    });
  }
);

export const ScoreController = {
 allScore,
  createScore,
  getScores,
};
