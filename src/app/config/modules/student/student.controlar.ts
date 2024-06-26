import { Request, Response } from "express";
import { studentServices } from "./student.servise";
import studentValidationSchema from "./student.validation";

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    // will call servise function to send this data
    const result = await studentServices.createStudentIntoDb(studentData);

    const { error, value } = studentValidationSchema.validate(studentData);
    if (error) {
      res.status(500).json({
        sucess: true,
        message: "Something went wrong",
        error: error.details,
      });
    }

    // response
    res.status(200).json({
      sucess: true,
      message: "Student is created sucessfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getAllStudentFromBd();
    res.status(200).json({
      sucess: true,
      message: "Student are retive sucessfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getSingaleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await studentServices.getSingaleStudentFromBd(studentId);
    res.status(200).json({
      sucess: true,
      message: "Student is resived sucessfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const StudentController = {
  createStudent,
  getAllStudents,
  getSingaleStudent,
};
