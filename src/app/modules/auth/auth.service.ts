// import { Role, User } from "../../../generated/prisma/client";
import { auth } from "../../lib/auth";

interface RegisterPatientPayload {
    name:string,
    email:string,
    password:string,
}

interface LoginUserPayload {
    email:string,
    password:string,
}
const registerPatient = async (payload:RegisterPatientPayload)=>{
    const {name,email,password}=payload;

    const data = await auth.api.signUpEmail({
        body:{
            name,
            email,
            password,
            // role:Role.PATIENT
        }
    })

    if(!data.user)
    {
        throw new Error("Failed to register patient")
    }



    return data;
}

const loginUser = async (payload:LoginUserPayload)=>{
    const {email,password} = payload;

    const data = await auth.api.signInEmail({
        body:{
            email,
            password
        }
    })

    if(!data.user)
    {
        throw new Error("Failed to login user")
    }

    return data;
}


export const AuthService = {
    registerPatient,
    loginUser
}