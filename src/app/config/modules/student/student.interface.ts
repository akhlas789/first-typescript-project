import { Schema, model, connect } from "mongoose";

export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContact: number;
  motherName: string;
  motherOccupation: string;
  motherContact: number;
};

export type UserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type LocalGardient = {
  name: string;
  occupation: string;
  contactNo: number;
};

export type Student = {
  id: number;
  name: UserName;
  gender: "male" | "femele";
  conTactNo: number;
  dteOfBarth: string;
  emergencyContact: number;
  email: string;
  bloodGroup?: "AB+" | "AB-" | "O+" | "O-" | "A+" | "A-" | "B+" | "B-";
  gardian: Guardian;
  localGardient: LocalGardient;
  profileImg?: string;
  isActive: "active" | "block";
  presentAdress:string,
  parmanentAdress:string,
};
