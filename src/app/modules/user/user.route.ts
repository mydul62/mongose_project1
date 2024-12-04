import express from 'express';
import { userControllers } from './user.controller';
import { studentVadations } from '../student/student.validation';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();



router.post(
  '/create-student',validateRequest(studentVadations.createStudentZodSchema),  userControllers.createStudent
);

export const UserRouter = router;
