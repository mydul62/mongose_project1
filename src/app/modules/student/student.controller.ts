import { Request, Response } from 'express';
import { studentService } from './student.service';

const createStudent = async (req: Request, res: Response) => {
 try {
  const student = req.body.student;
  // will call service funtion to send this data
  const result = await studentService.createStudentIntoDB(student);

  //  sernd response

  res.status(200).json({
    success: true,
    message: 'Student created successfully',
    data: result,
  });
  
 } catch (error) {
  console.log(error)
 }
};
const findStudents = async (req: Request, res: Response) => {
 try {
  const result = await studentService.findStudentsFromDB();

  //  sernd response

  res.status(200).json({
    success: true,
    message: 'seccessfully found students',
    data: result,
  });
  
 } catch (error) {
  console.log(error)
 }
};
const findStudent = async (req: Request, res: Response) => {
 try {
  const {id:studentID}= req.params;
  console.log(studentID)
  const result = await studentService.findAStudentFromDB(studentID);

  //  sernd response

  res.status(200).json({
    success: true,
    message: 'seccessfully found students',
    data: result,
  });
  
 } catch (error) {
  console.log(error)
 }
};


export const studentController = {
  createStudent,
  findStudents,
  findStudent
};
