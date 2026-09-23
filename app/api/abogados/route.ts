import {NextResponse} from "next/server";
import {prisma} from "@/lib/prisma";
export async function GET(){const abogados=await prisma.abogadoPerfil.findMany({take:50,select:{slug:true,nombre:true,apellidos:true,titulo:true,ciudad:true,verificado:true,ratingAvg:true,ratingCount:true,especialidades:{select:{nombre:true}}}});return NextResponse.json({data:abogados,count:abogados.length});}