import { model, Schema} from 'mongoose';
import { Gurdian, LocalGurdian, Student, UserName } from './student.interface';

const userNameSchema = new Schema<UserName>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
});

const gurdianSchema = new Schema<Gurdian>({
  fatherName: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  fatherOcupation: { type: String, required: true },
  motherName: { type: String, required: true },
  motherContactNo: { type: String, required: true },
  motherOcupation: { type: String, required: true },
});

const localGurdianSchema = new Schema<LocalGurdian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
});

const studentSchema = new Schema<Student>({
  id: { type: String , required: [true, ' id is required' ],},
  user:{
  type:Schema.Types.ObjectId,
  required: [true,'User id is required'],
  unique: true,
  ref:'User'
  },
  name:{
  type:  userNameSchema,
  required: true
  },
  gender: { type: String,
  enum: {
   values:['male', 'female'],
  message: '{VALUE} is not vallid, Gender should be either male or female'
  }, required: true },
  email: { type: String, required: true, unique: true },
  dataOfBirth: { type: String },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  gurdian: gurdianSchema,
  localGurdian: localGurdianSchema,
  profileImage: { type: String },
}
 , { timestamps: true },
);

export const studentModel = model<Student>('student', studentSchema);
 
