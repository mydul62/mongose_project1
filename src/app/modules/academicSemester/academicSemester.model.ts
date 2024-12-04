import { model, Schema } from "mongoose";
import { AcademicSemesterCode, AcademicSemesterName, MonthEnum } from "./academicSemester.constant";
import { TAcademicSemester } from "./academicSemester.interface";


const SemesterSchema = new Schema<TAcademicSemester>(
{
  name: {
    type: String,
    enum:AcademicSemesterName,
    required: true,
  },
  code: {
    type: String,
    enum: AcademicSemesterCode,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  startMonth: {
    type: String,
    enum: MonthEnum,
    required: true,
  },
  endMonth: {
    type: String,
    enum: MonthEnum,
    required: true,
  },
},
 { timestamps: true }
)

// use pre hook for not doblicate academicsemester for one year
 SemesterSchema.pre("save", async function ( next) {
  const isSemisteExists = await academicSemesterModel.findOne({
    year: this.year,
    name: this.name,
  });

  if (isSemisteExists) {
    throw new Error("Academic semester already exists for this year");
  }

  next();
});

export const academicSemesterModel = model<TAcademicSemester>('academicSemester', SemesterSchema);
