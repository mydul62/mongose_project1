import { Student } from "./student.interface";
import { studentModel } from "./student.model";


const createStudentIntoDB =async (student: Student)=>{
 const result = await studentModel.create(student)
 return result;
}
export const studentService = {
  createStudentIntoDB,
}