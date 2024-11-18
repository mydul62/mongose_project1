import express from 'express';
import { studentController } from './student.controller';

const router = express.Router();

// will call controller function

router.post('/create-student', studentController.createStudent);
router.get('/', studentController.findStudents);
router.get('/:id', studentController.findStudent);
// router.get('/findStudents?email={email}', studentController.findStudent);

export const studentRouters = router;
