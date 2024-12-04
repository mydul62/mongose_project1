import { Request, Response } from 'express';
import { catchAsync } from '../../utils/catchAsync';
import { AcademicSemesterServices } from './academicSemester.service';

const createAcademicSemester =catchAsync( async (
  req: Request,
  res: Response,
) => {
  const payload = req.body;
  const result = await AcademicSemesterServices.createAcademicSemesterIntoDB( payload);

  res.status(200).json({
    success: true,
    message: 'Academic Semester created successfully',
    data: result,
  });
})

export const AcademicSemesterControllers = {
  createAcademicSemester,
};
