import {NextResponse} from "next/server";
export async function GET(){return NextResponse.json({status:"ok",service:"abogado809-ecosystem-core",timestamp:new Date().toISOString()});}