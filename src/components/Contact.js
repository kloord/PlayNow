import React from 'react';
import './Contact.css'; // Importa el CSS de Contact

function Contact() {
  return (
    <section className="contactanos py-5">
      <div className="container">
        <h2 className="text-center mb-4">Contáctanos</h2>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form>
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input type="text" className="form-control" id="nombre" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="form-group">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea className="form-control" id="mensaje" rows="3"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;