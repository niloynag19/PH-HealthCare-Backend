import { Router } from "express";
import { SpecialtyRouter } from "../app/modules/specialty/specialty.router";
import { AuthRoutes } from "../app/modules/auth/auth.router";


const router=Router();
router.use("/auth",AuthRoutes)
router.use("/specialties",SpecialtyRouter);

export const IndexRoutes=router;