import { studentModel } from "./student.model";



const findStudentsFromDB=async ()=>{
 const result = await studentModel.find();
 return result;
}
const findAStudentFromDB=async (id:string)=>{
 const result = await studentModel.findById(id);
 return result;
}
export const studentService = {
  findStudentsFromDB,
  findAStudentFromDB
}