import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Logo</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Inicio <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Reservas</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Cursos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contáctanos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Iniciar sesión</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Registrarse</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;