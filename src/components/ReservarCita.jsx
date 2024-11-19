// src/components/ReservarCita.js
import React from 'react';
import './ReservarCita.css';

const ReservarCita = () => (
  <div className="reservar-cita">
    <div className="contenedor">
      <h1 className="titulo">Usted ha entrado a Reservar una cita</h1>
      <p className="mensaje">Por favor, complete el siguiente formulario para proceder con la reserva.</p>
      <form className="formulario">
        <input type="text" className="input" placeholder="Nombre" required />
        <input type="email" className="input" placeholder="Correo Electrónico" required />
        <input type="tel" className="input" placeholder="Teléfono" required />
        <textarea className="textarea" placeholder="Comentarios" required></textarea>
        <button type="submit" className="boton">Reservar</button>
      </form>
      <a href="/" className="boton-home">Volver a la página principal</a>
    </div>
  </div>
);

export default ReservarCita;
