// src/components/Registro.js
import React from 'react';
import './Registro.css';

const Registro = () => (
  <section id="registro_lass" className="registro">
    <div className="container">
      <div className="mensaje">
        <h1>Dedica a su buena <br /> salud</h1>
        <p>Su bienestar depende de una buena salud. Mi trabajo consiste en <br />
          asegurarse de que su cuerpo se encuentre en la mejores<br />
          condiciones posibles. Mi objetivo es permitirle moverse<br />
          libremente y sin dolor. Cuento con un titulo universitario en áreas<br />
          afines y capacitación avanzada
        </p>
      </div>
      <div className="cuadrado">
        <div className="form-block">
          <input type="text" id="nombre" name="nombre" className="form-control" placeholder="Nombre:" />
        </div>
        <div className="form-block">
          <input type="email" id="email" name="email" className="form-control" placeholder="Correo:" />
        </div>
        <div className="form-block">
          <input type="text" id="telefono" name="telefono" className="form-control" placeholder="Teléfono" />
        </div>
        <div className="form-mensaje">
          <textarea id="mensaje" name="mensaje" className="form-control" placeholder="Mensaje:"></textarea>
        </div>
        <div className="form-block">
          <a href="/mensaje-enviado" className="boton-enviar" aria-label="Enviar mensaje">Enviar mensaje</a>
        </div>
      </div>
    </div>
  </section>
);

export default Registro;
