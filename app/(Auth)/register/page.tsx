import FormRegister from "@/components/FormRegister"
import Link from "next/link"

const RegisterPage = () => {
  return (
    <div>
      <FormRegister />
      <p>
          <Link href="/login">
            ¿Ya tienes una cuenta? Inicia sesión
          </Link>
      </p>
    </div>
  )
}

export default RegisterPage