import {z} from "zod";
export const loginSchema=z.object({email:z.string().email(),password:z.string().min(6)});
export const lawyerSchema=z.object({nombre:z.string().min(1),apellidos:z.string().min(1),slug:z.string().min(1)});