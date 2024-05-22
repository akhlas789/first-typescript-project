import { Schema, model } from "mongoose";
import validator from "validator";
import {
  Guardian,
  LocalGardient,
  Student,
  UserName,
} from "./student/student.interface";

// Schema for UserName
const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: [true, "first name lagbay lagba"],
    trim: true,
  },
  middleName: { type: String, required: false }, // Made optional
  lastName: {
    type: String,
    required: [true, "lastName is requare true"],
  },
});

// Schema for Guardian
const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContact: { type: Number, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContact: { type: Number, required: true },
});

// Schema for LocalGardient
const localGardientSchema = new Schema<LocalGardient>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: Number, required: true },
});

// Main schema for Student
const studentSchema = new Schema<Student>({
  id: { type: Number, required: true, unique: true },
  name: { type: userNameSchema, required: true },
  gender: {
    type: String,
    enum: {
      values: ["male", "femele"],
      message:
        "the gender feild can only be one of the flowing : 'male','femele', or'other'.",
    },
    required: true,
  },
  conTactNo: { type: Number, required: true },
  dteOfBarth: { type: String, required: true },
  emergencyContact: { type: Number, required: false },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value: string) => validator.isEmail(value),
      message: "{Value}is not a valid email type",
    },
  },
  bloodGroup: {
    type: String,
    enum: ["AB+", "AB-", "O+", "O-", "A+", "A-", "B+", "B-"],
    required: false,
  },
  presentAddress: { type: String, required: false },
  parmanentAddress: { type: String, required: false },
  gardian: { type: guardianSchema, required: true },
  localGardient: { type: localGardientSchema, required: true },
  isActive: { type: String, enum: ["active", "block"], required: true },
  profileImg: { type: String, required: false },
});

// Model creation
export const StudentModel = model<Student>("Student", studentSchema);
