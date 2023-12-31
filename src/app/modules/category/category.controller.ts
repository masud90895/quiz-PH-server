import { Request, RequestHandler, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { CategoryService } from './category.service';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

// create category
const createCategory: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await CategoryService.createCategory(req.body);
    console.log(req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Category created successfully',
      data: result,
    });
  }
);

// get all category for dropdown
const getAllCategoryForDropdown: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await CategoryService.getAllCategoryForDropdown();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Get all category successfully',
      data: result,
    });
  }
);

// get all category
const getAllCategory: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await CategoryService.getAllCategory();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Get all category successfully',
      data: result,
    });
  }
);

// category by id
const getCategoryById: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await CategoryService.getCategoryById(req.params.id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Get category by id successfully',
      data: result,
    });
  }
);

// update category
const updateCategory: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await CategoryService.updateCategory(
      req.params.id,
      req.body
    );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Category updated successfully',
      data: result,
    });
  }
);

// delete category
const deleteCategory: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await CategoryService.deleteCategory(req.params.id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Category deleted successfully',
      data: result,
    });
  }
);

export const CategoryController = {
  createCategory,
  getAllCategory,
  getCategoryById,
  updateCategory,
  deleteCategory,
  getAllCategoryForDropdown,
};

