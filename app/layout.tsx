import "./globals.css";
import type {Metadata} from "next";
export const metadata:Metadata={title:"Abogado809 Ecosystem Core",description:"Reconstrucción modular y reutilizable de capacidades de Abogado809"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="es"><body>{children}</body></html>}