import z from "zod";
import { Gender } from "../../../generated/prisma/enums";

export const updateDoctorZodSchema = z.object({
    name: z.string("Name is required").min(5, "Name must be at least 5 characters long").max(30, "Name must be at most 30 characters long").optional(),
    email: z.email("Invalid email address").optional(), 
    contactNumber:z.string("Contact number is required").min(11, "Contact number must be at least 11 characters long").max(15, "Contact number must be at most 15 characters long").optional(),
    address: z.string("Address is required").min(10, "Address must be at least 10 characters long").max(100, "Address must be at most 100 characters long").optional(),
    registrationNumber: z.string("Registration number is required").min(5, "Registration number must be at least 5 characters long").max(20, "Registration number must be at most 20 characters long").optional(),
    experience: z.int("Experience must be an integer").min(0, "Experience must be at least 0 years").max(50, "Experience must be at most 50 years").optional(),  
    gender: z.enum([Gender.MALE,Gender.FEMALE], "Gender must be either 'male', 'female'").optional(),
    designation: z.string("Designation is required").min(3, "Designation must be at least 3 characters long").max(50, "Designation must be at most 50 characters long").optional(),
    appointmentFee: z.number("Appointment fee must be a number").min(0, "Appointment fee must be at least 0").optional(),
    qualification: z.string("Qualification is required").min(2, "Qualification must be at least 2 characters long").max(100, "Qualification must be at most 100 characters long").optional(),
    currentWorkplace: z.string("Current workplace is required").min(2, "Current workplace must be at least 2 characters long").max(100, "Current workplace must be at most 100 characters long").optional(),
    specialties: z.array(z.uuid(),("Specialty must be a string")).min(1, "At least one specialty is required").optional()
}).partial()