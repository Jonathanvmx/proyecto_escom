import Link from "next/link";
import FormLogin from "@/components/FormLogin"

const LoginPage = () => {
  return (
    <div>
      <FormLogin />
      
      <Link href="/login/Password">
        ¿Olvidaste tu contraseña?
      </Link>
      
    </div>
  )
}

export default LoginPage