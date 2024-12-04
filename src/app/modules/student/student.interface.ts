import { Types } from "mongoose";

export type UserName= {
  firstName: string;
  middleName: string;
  lastName: string;
};
export type Gurdian = {
  fatherName: string;
  fatherContactNo: string;
  fatherOcupation: string;
  motherName: string;
  motherContactNo: string;
  motherOcupation: string;
 }
 export type LocalGurdian = {
  name: string;
  occupation: string;
  contactNo: string;
 }
export type Student = {
  id: string;
  user:Types.ObjectId;
  password: string;
  name:UserName;
  gender:'male' | 'female';
  email: string;
  dataOfBirth: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?:'A+' | 'A-' | 'B+' | 'B-' | 'O+' | 'O-' | 'AB+' | 'AB-' ;
  presentAddress: string;
  permanentAddress: string;
  gurdian:Gurdian;
  localGurdian:LocalGurdian;
  profileImage?:string;
  admissionSemester: Types.ObjectId;
  isDeleted: boolean;
};

