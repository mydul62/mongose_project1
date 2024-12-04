import { Request, Response } from 'express';
import { studentService } from './student.service';
import { catchAsync } from '../../utils/catchAsync';

const findStudents = catchAsync(
  async (req, res ) => {
    const result = await studentService.findStudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'seccessfully found students',
      data: result,
    });
  }
);

const findStudent = catchAsync(async (req: Request, res: Response) => {

  const { id: studentID } = req.params;
  const result = await studentService.findAStudentFromDB(studentID);

  res.status(200).json({
    success: true,
    message: 'seccessfully found students',
    data: result,
  });
});

export const studentController = {
  findStudents,
  findStudent,
};
