import React from 'react';
import './Hero.css'; // Importa el CSS del Hero

function Hero() {
  return (
    <section className="hero">
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-12 text-center">
            <h1 className="display-4">¡Reserva tu cancha ya!</h1>
            <p className="lead">Encuentra las mejores canchas de tenis, fútbol y pádel.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;