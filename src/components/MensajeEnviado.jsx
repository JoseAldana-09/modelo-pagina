// src/components/MensajeEnviado.js
import React from 'react';
import './MensajeEnviado.css';

const MensajeEnviado = () => (
  <div className="mensaje-enviado">
    <div className="contenedor">
      <h1 className="titulo">Has enviado un mensaje</h1>
      <p className="mensaje">¡Gracias por tu mensaje! Nos pondremos en contacto contigo lo antes posible.</p>
      <a href="/" className="boton-home">Volver a la página principal</a>
    </div>
  </div>
);

export default MensajeEnviado;
