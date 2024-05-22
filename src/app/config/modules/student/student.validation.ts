import Joi from "joi";

const guardianSchema = Joi.object({
    fatherName: Joi.string().required(),
    fatherOccupation: Joi.string().required(),
    fatherContact: Joi.number().integer().required(),
    motherName: Joi.string().required(),
    motherOccupation: Joi.string().required(),
    motherContact: Joi.number().integer().required(),
  });

  const userNameSchema = Joi.object({
    firstName: Joi.string().required(),
    middleName: Joi.string().optional(),
    lastName: Joi.string().required(),
  });

  const localGardientSchema = Joi.object({
    name: Joi.string().required(),
    occupation: Joi.string().required(),
    contactNo: Joi.number().integer().required(),
  });

  const studentValidationSchema = Joi.object({
    id: Joi.number().integer().required(),
    name: userNameSchema.required(),
    gender: Joi.string().valid("male", "femele").required(),
    conTactNo: Joi.number().integer().required(),
    dteOfBarth: Joi.string().required(),
    emergencyContact: Joi.number().integer().optional(),
    email: Joi.string().email().required(),
    bloodGroup: Joi.string()
      .valid("AB+", "AB-", "O+", "O-", "A+", "A-", "B+", "B-")
      .optional(),
    presentAddress: Joi.string().optional(),
    parmanentAddress: Joi.string().optional(),
    gardian: guardianSchema.required(),
    localGardient: localGardientSchema.required(),
    isActive: Joi.string().valid("active", "block").required(),
    profileImg: Joi.string().uri().optional(),
  });

  export default studentValidationSchema;