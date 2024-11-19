// src/components/QuienesSomos.js
import React from 'react';
import './QuienesSomos.css';

const QuienesSomos = () => (
  <section id="quienessomos" className="quienessomos">
    <img src="/img/vertebr.jpg" alt="Imagen de una vértebra" className="vert" />
    <div className="capa-color"></div>
    <div className="contenido">
      <div className="letras">
        <h1>¿Busca un fisioterapeuta? Reserve una <br /> consulta gratuita</h1>
      </div>
      <div className="reservacita">
        <a href="/cita-reservada" className="citarev" aria-label="Reservar una cita">Reservar la cita</a>
      </div>
    </div>
  </section>
);

export default QuienesSomos;
