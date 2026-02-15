/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import { envVars } from "../../config/env";
import status from "http-status";
import z from "zod";
import { TErrorResponse, TErrorSource } from "../interfaces/error.interface";
import { handleZodError } from "../errorHelpers/handleZodError";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    if (envVars.NODE_ENV === "development") {
        console.error("Error from global error handler:", err);
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