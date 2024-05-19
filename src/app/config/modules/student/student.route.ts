import express from "express";
import { StudentController } from "./student.controlar";

const router = express.Router();
// will call controller function
router.post("/create-student", StudentController.createStudent);

router.get("/", StudentController.getAllStudents);

router.get("/:studentId", StudentController.getSingaleStudent);

export const studentRoutes = router;
