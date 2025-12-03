import { auth } from "@/auth"
import { redirect } from "next/navigation"

export default async function DashboardPage() {
    const session = await auth()

    if (!session) {
        redirect("/login/loginUser")
    }

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Dashboard de Usuario</h1>
            <p>Bienvenido, {session.user?.name || session.user?.email}</p>
            <div className="mt-4 p-4 border rounded bg-muted">
                <pre>{JSON.stringify(session, null, 2)}</pre>
            </div>
        </div>
    )
}
