import { Router } from "express";
import { SpecialtyRouter } from "../app/modules/specialty/specialty.router";
import { AuthRoutes } from "../app/modules/auth/auth.router";
import { UserRouter } from "../app/modules/user/user.router";
import { DoctorRoutes } from "../app/modules/doctor/doctor.router";
import { AdminRoutes } from "../app/modules/admin/admin.router";
import { scheduleRoutes } from "../app/modules/schedule/schedule.router";
import { DoctorScheduleRoutes } from "../app/modules/doctorSchedule/doctorSchedule.router";
import { AppointmentRoutes } from "../app/modules/appointment/appointment.router";
import { PatientRoutes } from "../app/modules/patient/patient.router";
import { ReviewRoutes } from "../app/modules/review/review.router";



const router=Router();
router.use("/auth",AuthRoutes)
router.use("/specialties",SpecialtyRouter);
router.use("/users",UserRouter)
router.use("/patients",PatientRoutes)
router.use("/doctors",DoctorRoutes)
router.use("/admins",AdminRoutes)
router.use("/schedules", scheduleRoutes)
router.use("/doctor-schedules", DoctorScheduleRoutes)
router.use("/appointments", AppointmentRoutes)
router.use("/reviews",ReviewRoutes)

export const IndexRoutes=router;