import { Student } from "./student.interface";
import { studentModel } from "./student.model";


const createStudentIntoDB =async (student: Student)=>{
 const result = await studentModel.create(student)
 return result;
}
const findStudentsFromDB=async ()=>{
 const result = await studentModel.find();
 return result;
}
const findAStudentFromDB=async (id:string)=>{
 const result = await studentModel.findOne({id});
 return result;
}
export const studentService = {
  createStudentIntoDB,
  findStudentsFromDB,
  findAStudentFromDB
}