import express from 'express';
import { studentController } from './student.controller';

const router = express.Router();


router.get('/', studentController.findStudents);
router.get('/:id', studentController.findStudent);

export const studentRouters = router;
