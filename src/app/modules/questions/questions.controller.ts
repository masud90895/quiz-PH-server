import { Request, RequestHandler, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { QuestionsService } from './questions.service';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

// create questions
const createQuestions: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await QuestionsService.createQuestions(req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Questions created successfully',
      data: result,
    });
  }
);

// get all questions

const getAllQuestions: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await QuestionsService.getAllQuestions();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Questions fetched successfully',
      data: result,
    });
  }
);

// get questions by id
const getQuestionsById: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await QuestionsService.getQuestionsById(req.params.id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Questions fetched successfully',
      data: result,
    });
  }
);

// update questions
const updateQuestions: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await QuestionsService.updateQuestions(
      req.params.id,
      req.body
    );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Questions updated successfully',
      data: result,
    });
  }
);

// delete questions
const deleteQuestions: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await QuestionsService.deleteQuestions(req.params.id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Questions deleted successfully',
      data: result,
    });
  }
);

export const QuestionsController = {
  createQuestions,
  getAllQuestions,
  getQuestionsById,
  updateQuestions,
  deleteQuestions,
};
