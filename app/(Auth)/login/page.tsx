import Link from "next/link";
import FormLogin from "@/components/FormLoginAdmin";

const LoginPage = () => {
  return (
    <div>
      <FormLogin />
      
      <p>
        <Link href="/login/Password">
          ¿Olvidaste tu contraseña?
        </Link>
      </p>
      <p>
        <Link href="/register">
          ¿No tienes una cuenta? Regístrate
        </Link>
      </p>
      <p>
        <Link href="/login/loginUser">
          Iniciar sesión como usuario
        </Link>
      </p>
    </div>
  )
}

export default LoginPage