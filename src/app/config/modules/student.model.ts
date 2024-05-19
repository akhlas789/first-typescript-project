import { Schema, model } from "mongoose";
import {
  Guardian,
  LocalGardient,
  Student,
  UserName,
} from "./student/student.interface";

const studentInfoSchema = new Schema<UserName>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
});

const gardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContact: { type: Number, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContact: { type: Number, required: true },
});

const localGardientSchema = new Schema<LocalGardient>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: Number, required: true },
});

export const studentSchema = new Schema<Student>({
  id: { type: Number },
  name: studentInfoSchema,
  gender: ["male", "femele"],
  conTactNo: { type: Number, required: true },
  dteOfBarth: { type: String },
  emergencyContact: { type: Number },
  email: { type: String },
  bloodGroup: ["AB+", "AB-", "O+", "O-", "A+", "A-", "B+", "B-"],
  presentAddress: { type: String },
  parmanentAddress: { type: String },
  gardian: gardianSchema,
  localGardient: localGardientSchema,
  isActive: ["active", "block"],
  profileImg: { type: String },
});

export const StudentModel = model<Student>("Student", studentSchema);
