import express, { Application, Request, Response } from "express";
import { prisma } from "./app/lib/prisma";
import { IndexRoutes } from "./routes";
import { globalErrorHandler } from "./app/middleware/globalErrorHandler";
import { notFound } from "./app/middleware/notFound";

const app: Application = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use("/api/v1/",IndexRoutes)

app.get("/",async (req:Request, res:Response) => {
  const specialty= await prisma.specialty.create({
    data:{
      title:'Cardiology'
    }
  })
  res.status(201).json({
    success:true,
    message:"API working fine",
    data:specialty
  })
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
app.use(globalErrorHandler); 
app.use(notFound);

export default app;