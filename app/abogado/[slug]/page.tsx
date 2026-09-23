export const dynamic="force-dynamic";
import {notFound} from "next/navigation";
import {prisma} from "@/lib/prisma";
export default async function LawyerPage({params}:{params:{slug:string}}){
 const lawyer=await prisma.abogadoPerfil.findUnique({where:{slug:params.slug},include:{especialidades:true}});
 if(!lawyer) notFound();
 return <main className="mx-auto max-w-3xl p-8"><h1 className="text-3xl font-bold">{lawyer.nombre} {lawyer.apellidos}</h1><p>{lawyer.descripcion??"Perfil profesional."}</p></main>;
}