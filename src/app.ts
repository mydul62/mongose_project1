import { Application, Request, Response } from 'express';
import express from 'express';
import cors from 'cors';
import { studentRouters } from './app/modules/student/student.route';
const app: Application = express();

// perser
app.use(express.json());
app.use(cors());

// application routes 

app.use('api/v1/students',studentRouters)

const getAconcroller = (req: Request, res: Response)=>{
  res.send('Hello W');
}

app.get('/', getAconcroller);

export default app;
