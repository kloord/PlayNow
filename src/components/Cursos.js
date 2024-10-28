import React from 'react';
import CursoCard from './Cursos';
import './Cursos.css'; // Importa el CSS de Cursos

function Cursos() {
  return (
    <section className="cursos py-5">
      <div className="container">
        <h2 className="text-center mb-4">Cursos</h2>
        <div className="row">
          <CursoCard
            imagen="imagen-curso-tenis.jpg"
            titulo="Curso de tenis para adultos"
            descripcion="Aprende a jugar al tenis desde cero con nuestro curso para adultos."
            enlace="https://wa.me/?text=Me interesa el curso de tenis para adultos"
          />
          <CursoCard
            imagen="imagen-curso-futbol.jpg"
            titulo="Entrenamiento de porteros"
            descripcion="Mejora tus habilidades como portero con este entrenamiento especializado."
            enlace="https://wa.me/?text=Me interesa el Entrenamiento de porteros"
          />
          <CursoCard
            imagen="imagen-curso-padel.jpg"
            titulo="Curso de pádel para principiantes"
            descripcion="Iníciate en el pádel con nuestro curso para principiantes."
            enlace="https://wa.me/?text=Me interesa el curso de pádel para principiantes"
          />
        </div>
      </div>
    </section>
  );
}

export default Cursos;