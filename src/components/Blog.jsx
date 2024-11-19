// src/components/Blog.js
import React from 'react';
import './Blog.css';

const Blog = () => (
  <section id="mi_blog" className="blog">
    <div className="container">
      <img src="/img/fisio.jpg" alt="Imagen de fisioterapia" className="fisio-terapia" />
      <div className="letras">
        <h1>Acerca de mí</h1>
        <p>Me esfuerzo por mejorar su calidad de vida</p>
        <br />
        <p>
          La fisioterapia es un enfoque activo centrado en el ejercicio para eliminar el dolor, curar las lesiones y facilitar la rehabilitación. Mi objetivo es que recupere su dinamismo, mejore su fortaleza y aumente su flexibilidad. Tengo el objetivo de restaurar y mejorar el movimiento después de una lesión o cirugía, mediante ejercicios terapéuticos, educación y consejos sobre su estilo de vida.
        </p>
        <a href="/leer-mas" className="leer-mas" aria-label="Leer más sobre mí">Leer más</a>
      </div>
    </div>
  </section>
);

export default Blog;
