import config from '../../config';
import { Student } from '../student/student.interface';
import { studentModel } from '../student/student.model';
import { TUser } from './user.interface';
import UserModel from './user.model';
import bcrypt from 'bcrypt';
const saltRounds = 10;
const createStudentIntoDB = async (password: string, studentData: Student) => {
  //  set student role
  const userData: Partial<TUser> = {};

  // if passowrd not given by user
  const newPassword = password || (config.defult_password as string);
  // Hash the password asynchronously
  const hash = await bcrypt.hash(newPassword, saltRounds);
  userData.password = hash;
  userData.role = 'student';
  // set manualy genarated id

  userData.id = '2203062';

  //  create user
  const newUser = await UserModel.create(userData);
  if (Object.keys(newUser).length) {
    // create a student
    // set id,_id as user;
    studentData.id = newUser.id;
    studentData.user = newUser._id;
    const newStudent = await studentModel.create(studentData);
    return newStudent;
  }
};

export const userServices = {
  createStudentIntoDB,
};
