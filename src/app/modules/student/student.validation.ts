import { z } from 'zod';

// Define UserName schema
const userNameZodSchema = z.object({
  firstName: z
    .string()
    .min(1, 'First name must be at least 1 character')
    .max(50, 'First name must be at most 50 characters'),
  middleName: z.string().min(1).max(50).optional(),
  lastName: z
    .string()
    .min(1, 'Last name must be at least 1 character')
    .max(50, 'Last name must be at most 50 characters'),
});

// Define Guardian schema
const gurdianZodSchema = z.object({
  fatherName: z
    .string()
    .min(1, "Father's name must be at least 1 character")
    .max(50),
  fatherContactNo: z
    .string()
    .min(1, "Father's contact number must be at least 1 character")
    .max(15),
  fatherOcupation: z
    .string()
    .min(1, "Father's occupation must be at least 1 character")
    .max(50),
  motherName: z
    .string()
    .min(1, "Mother's name must be at least 1 character")
    .max(50),
  motherContactNo: z
    .string()
    .min(1, "Mother's contact number must be at least 1 character")
    .max(15),
  motherOcupation: z
    .string()
    .min(1, "Mother's occupation must be at least 1 character")
    .max(50),
});

// Define LocalGuardian schema
const localGurdianZodSchema = z.object({
  name: z
    .string()
    .min(1, "Local guardian's name must be at least 1 character")
    .max(50),
  occupation: z
    .string()
    .min(1, 'Occupation must be at least 1 character')
    .max(50),
  contactNo: z
    .string()
    .min(1, 'Contact number must be at least 1 character')
    .max(15),
});

// Define Student schema
const createStudentZodSchema = z.object({
  body: z.object({
    password: z.string(),
    student:z.object({
    name: userNameZodSchema,
    gender: z.enum(['male', 'female'], {
      errorMap: () => ({ message: "Gender must be either 'male' or 'female'" }),
    }),
    email: z.string().email('Invalid email format').max(100),
    dataOfBirth: z.string().min(1).max(10).optional(),
    contactNo: z
      .string()
      .min(1, 'Contact number must be at least 1 character')
      .max(15),
    emergencyContactNo: z
      .string()
      .min(1, 'Emergency contact number must be at least 1 character')
      .max(15),
    bloodGroup: z
      .enum(['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'])
      .optional(),
    presentAddress: z
      .string()
      .min(1, 'Present address must be at least 1 character')
      .max(200),
    permanentAddress: z
      .string()
      .min(1, 'Permanent address must be at least 1 character')
      .max(200),
    gurdian: gurdianZodSchema,
    localGurdian: localGurdianZodSchema.optional(),
    profileImage: z
      .string()
      .url('Profile image must be a valid URL')
      .optional(),
   })
  }),
});

export const studentVadations = {
  createStudentZodSchema,
};
