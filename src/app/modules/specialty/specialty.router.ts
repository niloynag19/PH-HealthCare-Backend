/* eslint-disable @typescript-eslint/no-explicit-any */
import { Router } from "express";
import { SpecialtyController } from "./specialty.controller";
import { checkAuth } from "../../middleware/checkAuth";
import { Role } from "../../../generated/prisma/enums";
import { multerUpload } from "../../../config/multer.config";
import { validateRequest } from "../../middleware/validateRequest";
import { SpecialtyValidation } from "./specilty.validation";


const router = Router();
router.post("/", checkAuth(Role.SUPER_ADMIN, Role.ADMIN),

    multerUpload.single("file"),

    validateRequest(SpecialtyValidation.createSpecialtyZodSchema),
    
    SpecialtyController.createSpecialty)

router.get("/", checkAuth(Role.PATIENT), SpecialtyController.getAllSpecialties)

router.delete("/:id", SpecialtyController.deleteSpecialty)

router.patch("/:id", SpecialtyController.updateSpecialty)

export const SpecialtyRouter = router;