import Link from 'next/link'

const HomePage = () => {
  return (
    <div>
      <header>
        <h1>Ticko</h1>
        <nav>
          <Link href="/">Inicio</Link> | 
          <Link href="/acerca">Acerca de</Link> | 
          <Link href="/contacto">Contacto</Link>
        </nav>
      </header>

      <main>
        <section>
          <h2>¡Bienvenido!</h2>
          <p>Esta es la página de inicio de nuestra aplicación.</p>
          <button>Comenzar Ahora</button>
        </section>

        <section>
          <h3>Características Destacadas</h3>
          <ul>
            <li>Fácil de Usar</li>
            <li>Rendimiento Rápido</li>
            <li>Diseño Simple</li>
          </ul>
        </section>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Ticko. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

export default HomePage