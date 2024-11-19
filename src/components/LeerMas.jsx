// src/components/LeerMas.js
import React from 'react';
import './LeerMas.css';

const LeerMas = () => (
  <div className="leer-mas-pagina">
    <div className="contenedor">
      <h1 className="titulo">Acerca de Mí</h1>
      <p className="mensaje">Gracias por querer saber más sobre mí. Aquí encontrarás más detalles sobre mi experiencia y enfoque en la fisioterapia.</p>
      <p className="contenido">
        Soy un fisioterapeuta con años de experiencia en el campo de la rehabilitación y el tratamiento del dolor. Mi objetivo es ayudarte a recuperar tu movilidad y mejorar tu calidad de vida mediante técnicas avanzadas y personalizadas. Creo firmemente en un enfoque centrado en el paciente, donde cada tratamiento es adaptado a tus necesidades específicas.
      </p>
      <p className="contenido">
        Además de mi trabajo clínico, me dedico a la educación y formación continua para mantenerme actualizado con las últimas investigaciones y técnicas en fisioterapia. Estoy comprometido con la excelencia y con proporcionarte el mejor cuidado posible.
      </p>
      <a href="/" className="boton-home">Volver a la página principal</a>
    </div>
  </div>
);

export default LeerMas;
