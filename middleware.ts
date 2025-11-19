import NextAuth from "next-auth"
import authConfig from "./auth.config"
 
export default NextAuth(authConfig).auth
export const config = {
  matcher: [
    '/', // Rutas que coinciden exactamente con la raíz
    '/(.)', // Rutas dinámicas
    '/(api|trpc)(.)', // Rutas de API o TRPC
    // Regex de Next.js para rutas que no deben ser tratadas por el middleware
    '/((?!.*\\..*|_next).*)',
  ],
};