/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import { envVars } from "../../config/env";
import status from "http-status";
import z from "zod";
import { TErrorResponse, TErrorSource } from "../interfaces/error.interface";
import { handleZodError } from "../errorHelpers/handleZodError";
import { deleteFileFromCloudinary } from "../../config/cloudinary.config";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const globalErrorHandler = async (err: any, req: Request, res: Response, next: NextFunction) => {
    if (envVars.NODE_ENV === "development") {
        console.error("Error from global error handler:", err);
    }

    if(req.file)
    {
        await deleteFileFromCloudinary(req.file.path)
    }
    if(req.files && Array.isArray(req.files) && req.files.length>0)
    {
        const imageUrls = req.files.map((file)=>file.path);
        await Promise.all(imageUrls.map(url=>deleteFileFromCloudinary(url)));
    }
    let errorSource: TErrorSource[] = []

    let statusCode: number = status.INTERNAL_SERVER_ERROR;

    let message: string = 'Internal Server Error';


    if (err instanceof z.ZodError) {
        const simplifiedError = handleZodError(err);
        statusCode = simplifiedError.statusCode as number;
        message = simplifiedError.message;
        errorSource = [...simplifiedError.errorSource]
    }
    const errorResponse: TErrorResponse = {
        success: false,
        message: message,
        errorSource: errorSource,
        error: envVars.NODE_ENV === "development" ? err : undefined,
    }
    res.status(statusCode).json(errorResponse);
}