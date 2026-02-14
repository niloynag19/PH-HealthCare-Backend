// import { Role, User } from "../../../generated/prisma/client";
import { auth } from "../../lib/auth";
import { prisma } from "../../lib/prisma";

interface RegisterPatientPayload {
    name: string,
    email: string,
    password: string,
}

interface LoginUserPayload {
    email: string,
    password: string,
}
const registerPatient = async (payload: RegisterPatientPayload) => {
    const { name, email, password } = payload;

    const data = await auth.api.signUpEmail({
        body: {
            name,
            email,
            password,
            // role:Role.PATIENT
        }
    })

    if (!data.user) {
        throw new Error("Failed to register patient")
    }

    // Create patient record in the database
    try {
        const patient = await prisma.$transaction(async (tx) => {
            const patientTx = await tx.patient.create({
                data: {
                    userId: data.user!.id,
                    name: payload.name,
                    email: payload.email,

                }
            })

            return patientTx;
        })

        return {
            ...data,
            patient
        };
    } catch (error) {
        console.log(error);
        await prisma.user.delete({
            where: { id: data.user.id }
        })
    }
}

const loginUser = async (payload: LoginUserPayload) => {
    const { email, password } = payload;

    const data = await auth.api.signInEmail({
        body: {
            email,
            password
        }
    })

    if (!data.user) {
        throw new Error("Failed to login user")
    }

    return data;
}


export const AuthService = {
    registerPatient,
    loginUser
}