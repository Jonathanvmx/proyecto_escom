import React from 'react';

const contactPage = () => {
  return (
    <div>
      <div>
        <h1>Contacto e Informacion del Proyecto</h1>
        <p>Sistema Gestor de Tickets ESCOM - IPN</p>
      </div>
      
      <div>
        <h2>Sobre Nuestro Proyecto</h2>
        <p>Este sistema gestor de tickets es un proyecto escolar desarrollado por alumnos de la Escuela Superior de Computo (ESCOM) del Instituto Politecnico Nacional (IPN).</p>
        
        <div>
          <p>Materia/Unidad de Aprendizaje: ADS</p>
          <p>Objetivo Principal: Optimizar el proceso de soporte y seguimiento de incidencias.</p>
          <p>Tecnologias Usadas: React, NEXT, PRISMA ORM, Auth js</p>
        </div>
      </div>

      <div>
        <h2>Datos de Contacto</h2>
        <p>Si tienes dudas o sugerencias, puedes contactarnos a traves de los siguientes medios:</p>

        <div>
          <div>
            <h3>Equipo de Desarrollo</h3>
            <p>Cris</p>
            <p>Negriel</p>
            <p>Dimas Gonzalez Santiago</p>
            <p>Pony</p>
            <p>Culinan</p>
          </div>
          <div>
            <h3>Soporte Tecnico</h3>
            <p>Horario: Lunes a Viernes (8:00 - 18:00 hrs)</p>
          </div>
        </div>
      </div>
      
      <div>
        <h2>Ubicacion ESCOM - IPN</h2>
        <p>Estamos ubicados en la sede de la Escuela Superior de Computo:</p>
        <address>
          Av. Juan de Dios Batiz s/n esq. Miguel Othon de Mendizabal, <br />
          Col. Nueva Industrial Vallejo, AlcaLdia Gustavo A. Madero, <br />
          C.P. 07738, Ciudad de Mexico, Mexico.
        </address>
        
        <div>
            <p>Espacio para un mapa interactivo (ej. Google Maps).</p>
        </div>
      </div>
      
      <footer>
        <p>Proyecto Escolar ESCOM - IPN. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

export default contactPage