import express, { Application, Request, Response } from "express";
import cors from "cors";
import { studentRoutes } from "./app/config/modules/student/student.route";
const app: Application = express();

// parsear
app.use(express.json());
app.use(cors());

// application route
app.use("/api/v1/student", studentRoutes);

app.get("/", (req: Request, res: Response) => {
  const a = 10;

  res.send(a);
});

export default app;
