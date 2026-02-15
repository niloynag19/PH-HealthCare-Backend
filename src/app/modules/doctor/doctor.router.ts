import { Router } from "express";
import { DoctorController } from "./doctor.controller";
import { validateRequest } from "../../middleware/validateRequest";
import { updateDoctorZodSchema } from "./doctor.validation";

const router = Router();

router.get("/",DoctorController.getAllDoctors)
router.get("/:id",DoctorController.getDoctorById)
router.delete("/:id",DoctorController.deleteDoctor)
router.patch("/:id",validateRequest(updateDoctorZodSchema),DoctorController.updateDoctor)
export const DoctorRouter = router;