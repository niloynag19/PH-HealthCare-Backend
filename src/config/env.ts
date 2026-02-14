import dotenv from "dotenv";

dotenv.config();

interface EnvConfig {
    PORT: string,
    NODE_ENV: string,
    DATABASE_URL: string,
    BETTER_AUTH_URL: string,
    BETTER_AUTH_SECRET: string
}

const LoadEnvVariables = (): EnvConfig => {
    const requiredVariable = [
        "PORT",
        "NODE_ENV",
        "DATABASE_URL",
        "BETTER_AUTH_URL",
        "BETTER_AUTH_SECRET"
    ]

    requiredVariable.forEach((variable) => {
        if (!process.env[variable]) {
            throw new Error(`Missing required environment variable: ${variable} is required but not set in .env file`);
        }
    })
    return {
        NODE_ENV: process.env.NODE_ENV as string,
        PORT: process.env.PORT as string,
        DATABASE_URL: process.env.DATABASE_URL as string,
        BETTER_AUTH_URL: process.env.BETTER_AUTH_URL as string,
        BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET as string
    }
}

export const envVars = LoadEnvVariables()