import express from 'express'
import { StudentController } from './student.controlar';

const router = express.Router();
// will call controller function
router.post('/create-student',StudentController.createStudent)