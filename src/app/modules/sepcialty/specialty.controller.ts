import { Request, Response } from "express";
import { SpecialtyService } from "./specialty.secvice";


const createSpecialty = async (req:Request, res:Response) => {
    try {
        const payload=req.body;
        const result = await SpecialtyService.createSpecialty(payload)
        res.status(201).json({
            success:true,
            message:"Specialty create successfully",
            data:result
        })
    } catch (error) {
        console.log(error);
    }
}

const getAllSpecialties = async (req:Request, res:Response) => {
    try {
        const result = await SpecialtyService.getAllSpecialties()
        res.status(200).json({
            success:true,
            message:"Specialties get successfully",
            data:result
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message:"Failed to get specialties"
        })
    }
}

const deleteSpecialty = async (req:Request, res:Response) => {
    try {
        const {id}=req.params;    
        const result = await SpecialtyService.deleteSpecialty(id as string)
        res.status(200).json({
            success:true,
            message:"Specialty deleted successfully",
            data:result
        })
    }catch (error) {
        console.log(error);
        res.status(500).json({  
            success:false,
            message:"Failed to delete specialty"
        })
    }
}

const updateSpecialty = async (req:Request, res:Response) => {
    try {
        const {id}=req.params;  
        const payload=req.body;
        const result = await SpecialtyService.updateSpecialty(id as string, payload)
        res.status(200).json({
            success:true,
            message:"Specialty updated successfully",
            data:result
        })
    }catch (error) {
        console.log(error);
        res.status(500).json({  
            success:false,
            message:"Failed to update specialty"
        })
    }
}

export const SpecialtyController ={
    createSpecialty,
    getAllSpecialties,
    deleteSpecialty,
    updateSpecialty
}