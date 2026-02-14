import { Request, Response } from "express";
import { DoctorService } from "./doctor.service";

const getAllDoctors = async (req:Request, res:Response) => {
    try {
        const doctors = await DoctorService.getAllDoctors();        
        res.status(200).json({
            success: true,
            message: "Doctors retrieved successfully",
            data: doctors   
            })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: (error as Error).message
        })
    }
}

const getDoctorById = async (req:Request, res:Response) => {
    try {
        const { id } = req.params;  
        const doctor = await DoctorService.getDoctorById(id as string);      
        if (!doctor) {
            return res.status(404).json({   
                success: false,
                message: "Doctor not found"
             })
        }   
        res.status(200).json({
            success: true,
            message: "Doctor retrieved successfully",
            data: doctor   
            })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: (error as Error).message
        })
    }
}

const deleteDoctor = async (req:Request, res:Response) => {
    try {
        const { id } = req.params;  
        const doctor = await DoctorService.deleteDoctor(id as string);
        if (!doctor) {
            return res.status(404).json({   
                success: false, 
                message: "Doctor not found"
             })
        }   
        res.status(200).json({
            success: true,
            message: "Doctor deleted successfully",
            data: doctor   
            })
    } catch (error) {
        res.status(500).json({
            success: false, 
            message: (error as Error).message
        })
    }   

}

const updateDoctor = async (req:Request, res:Response) => {
    try {
        const { id } = req.params;  
        const payload = req.body;
        const doctor = await DoctorService.updateDoctor(id as string, payload);
        if (!doctor) {
            return res.status(404).json({
                success: false, 
                message: "Doctor not found"
                })  
        }
        res.status(200).json({
            success: true,
            message: "Doctor updated successfully",
            data: doctor   
            })
    }   
    catch (error) {
        res.status(500).json({
            success: false, 
            message: (error as Error).message
        })
    }
}

export const DoctorController = {
    getAllDoctors,
    getDoctorById,
    deleteDoctor,
    updateDoctor
}