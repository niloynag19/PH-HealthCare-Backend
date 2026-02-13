import { Router } from "express";
import { SpecialtyRouter } from "../app/modules/sepcialty/specialty.router";


const router=Router();
router.use("/specialties",SpecialtyRouter);

export const IndexRoutes=router;