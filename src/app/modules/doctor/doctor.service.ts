import { prisma } from "../../lib/prisma";


const getAllDoctors = async () => {
    const doctors = await prisma.doctor.findMany({
        include: {
            user: true,
            specialties: {
                include: {
                    specialty: true
                }
            }
        }
    })
    return doctors;
}

const getDoctorById = async (id: string) => {   
    const doctor = await prisma.doctor.findUnique({
        where: { id },
        include: {
            user: true, 
            specialties: {
                include: {
                    specialty: true
                }
            }
        }
    })
    return doctor;
}

const deleteDoctor = async (id: string) => {
    const doctor = await prisma.doctor.delete({
        where: { id }
    })
    return doctor;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const updateDoctor = async (id: string, payload: any) => {
    const doctor = await prisma.doctor.update({
        where: { id },  
        data: payload
    })
    return doctor;
}           

export const DoctorService = {
    getAllDoctors,
    getDoctorById,
    deleteDoctor,
    updateDoctor
}

