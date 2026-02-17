import { Router } from "express";
import { SpecialtyRouter } from "../app/modules/specialty/specialty.router";
import { AuthRoutes } from "../app/modules/auth/auth.router";
import { UserRouter } from "../app/modules/user/user.router";
import { DoctorRoutes } from "../app/modules/doctor/doctor.router";
import { AdminRoutes } from "../app/modules/admin/admin.router";



const router=Router();
router.use("/auth",AuthRoutes)
router.use("/specialties",SpecialtyRouter);
router.use("/users",UserRouter)
router.use("/doctors",DoctorRoutes)
router.use("/admins",AdminRoutes)

export const IndexRoutes=router;