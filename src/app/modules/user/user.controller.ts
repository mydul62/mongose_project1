import { Request, Response } from 'express';
import { userServices } from './user.services';
import { catchAsync } from '../../utils/catchAsync';

const createStudent =catchAsync( async (
  req: Request,
  res: Response,
) => {
  const { password, student } = req.body;
  const result = await userServices.createStudentIntoDB(password, student);

  res.status(200).json({
    success: true,
    message: 'Student created successfully',
    data: result,
  });
})

export const userControllers = {
  createStudent,
};
