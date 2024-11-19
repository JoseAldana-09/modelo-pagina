// src/components/Portada.js
import React from 'react';
import './Portada.css';

const Portada = () => (
  <div className="portada">
    <img src="/img/portada.jpg" alt="Imagen de Portada" className="por" />
    <div className="capa-color"></div>
    <div className="contenido-portada">
      <h1>ESCUCHE A</h1>
      <h1>SU CUERPO</h1>
      <p>Obtenga la atención que necesita de un profesional</p>
      <a href="/reservar-cita" className="btn-reserva" aria-label="Reservar una cita">Reserve una cita</a>
    </div>
  </div>
);

export default Portada;
