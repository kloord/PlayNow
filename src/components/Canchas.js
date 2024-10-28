import React from 'react';
import CanchaCard from './Canchas';
import './Canchas.css'; // Importa el CSS de Canchas

function Canchas() {
  return (
    <section className="nuestras-canchas py-5">
      <div className="container">
        <h2 className="text-center mb-4">Nuestras canchas</h2>
        <div className="row">
          <CanchaCard imagen="imagen-cancha-tenis.jpg" titulo="Cancha de tenis" descripcion="Descripción de la cancha de tenis." />
          <CanchaCard imagen="imagen-cancha-futbol.jpg" titulo="Cancha de fútbol" descripcion="Descripción de la cancha de fútbol." />
          <CanchaCard imagen="imagen-cancha-padel.jpg" titulo="Cancha de pádel" descripcion="Descripción de la cancha de pádel." />
        </div>
      </div>
    </section>
  );
}

export default Canchas;