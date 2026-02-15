import z from "zod";
import { Gender } from "../../../generated/prisma/enums";

export const createDoctorZodSchema = z.object({
    password: z.string("Password is required").min(6, "Password must be at least 6 characters long"),
    doctor: z.object({
        name: z.string("Name is required").min(5, "Name must be at least 5 characters long").max(30, "Name must be at most 30 characters long"),
        email: z.email("Invalid email address"),
        contactNumber:z.string("Contact number is required").min(11, "Contact number must be at least 11 characters long").max(15, "Contact number must be at most 15 characters long"),
        address: z.string("Address is required").min(10, "Address must be at least 10 characters long").max(100, "Address must be at most 100 characters long").optional(),
        registrationNumber: z.string("Registration number is required").min(5, "Registration number must be at least 5 characters long").max(20, "Registration number must be at most 20 characters long"),
        experience: z.int("Experience must be an integer").min(0, "Experience must be at least 0 years").max(50, "Experience must be at most 50 years"),
        gender:z.enum([Gender.MALE,Gender.FEMALE], "Gender must be either 'male', 'female'"),
        designation: z.string("Designation is required").min(3, "Designation must be at least 3 characters long").max(50, "Designation must be at most 50 characters long"),
    }),
    specialties: z.array(z.uuid(),("Specialty must be a string")).min(1, "At least one specialty is required"),

})