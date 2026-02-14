import { Router } from "express";
import { SpecialtyRouter } from "../app/modules/specialty/specialty.router";
import { AuthRoutes } from "../app/modules/auth/auth.router";
import { UserRouter } from "../app/modules/user/user.router";
import { DoctorRouter } from "../app/modules/doctor/doctor.router";


const router=Router();
router.use("/auth",AuthRoutes)
router.use("/specialties",SpecialtyRouter);
router.use("/users",UserRouter)
router.use("/doctors",DoctorRouter)

export const IndexRoutes=router;