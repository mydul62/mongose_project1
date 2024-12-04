/* eslint-disable no-unused-vars */
import { Application, Request, Response  } from 'express';
import express from 'express';
import cors from 'cors';
import { studentRouters } from './app/modules/student/student.route';
import { UserRouter } from './app/modules/user/user.route';
import { errorHandler } from './app/middlewares/globalerrorhandler';
import { notFoundError } from './app/middlewares/notFound';
import { AcademicSemesterRoutes } from './app/modules/academicSemester/academicSemester.router';
const app: Application = express();

// perser
app.use(express.json());
app.use(cors());

// application routes 

app.use('/api/v1/students',studentRouters)
app.use('/api/v1/users',UserRouter)
app.use('/api/v1/academic-semester',AcademicSemesterRoutes)

const getAconcroller = (req: Request, res: Response)=>{
  res.send('Hello W');
}

app.get('/', getAconcroller);


app.use(errorHandler);

app.use(notFoundError);

export default app;
