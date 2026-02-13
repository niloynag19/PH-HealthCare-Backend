import { Request, Response } from "express";
import { AuthService } from "./auth.service";

const registerPatient = async (req:Request,res:Response)=>{
    try {
        const payload=req.body;
        const result = await AuthService.registerPatient(payload);
        res.status(201).json({
            success:true,
            message:"Patient register successfully",
            data:result
        })
    } catch (error) {
        console.log(error);
    }
}

const loginUser = async (req:Request,res:Response)=>{
    try {
        const payload=req.body;
        const result = await AuthService.loginUser(payload);
        res.status(201).json({
            success:true,
            message:"User login successfully",
            data:result
        })
    } catch (error) {
        console.log(error);
    }
}

export const AuthController ={
    registerPatient,
    loginUser
}