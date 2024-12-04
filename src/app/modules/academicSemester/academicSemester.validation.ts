import {z} from 'zod';
import { AcademicSemesterCode, AcademicSemesterName, MonthEnum } from './academicSemester.constant';

const AcademicSemesterZodSchema = z.object({
  body:z.object({
  name :z.enum([...AcademicSemesterName] as [string, ...string[]]),
  year :z.string(),
  code:z.enum([...AcademicSemesterCode] as [string, ...string[]]),
  startMonth:z.enum([...MonthEnum] as [string, ...string[]]),
  endMonth:z.enum([...MonthEnum] as [string, ...string[]]),
  })
})


export const AcademicSemesterValidations = {
  AcademicSemesterZodSchema,
}