import { Request, Response } from "express";
import { UserService } from "./user.service";

const createDoctor = async (req: Request, res: Response) => {
    try {
        const payload = req.body;
        const doctor = await UserService.createDoctor(payload);
        res.status(201).json({
            success: true,
            message: "Doctor created successfully",
            data: doctor
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: (error as Error).message
        })
    }


}

export const UserController = {
    createDoctor
}