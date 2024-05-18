import { Request, Response } from "express";
import { studentServices } from "./student.servise";

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body;
    // will call servise function to send this data
    const result = await studentServices.createStudentIntoDb(student);

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

export const StudentController ={
    createStudent,
}
