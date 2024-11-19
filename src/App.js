// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Portada from './components/Portada';
import Registro from './components/Registro';
import QuienesSomos from './components/QuienesSomos';
import Blog from './components/Blog';
import Examen from './components/Examen';
import ReservarCita from './components/ReservarCita';
import MensajeEnviado from './components/MensajeEnviado';
import CitaReservada from './components/CitaReservada';
import LeerMas from './components/LeerMas';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Portada />
                <Registro />
                <QuienesSomos />
                <Blog />
                <Examen />
              </>
            } 
          />
          <Route path="/reservar-cita" element={<ReservarCita />} />
          <Route path="/mensaje-enviado" element={<MensajeEnviado />} />
          <Route path="/cita-reservada" element={<CitaReservada />} />
          <Route path="/leer-mas" element={<LeerMas />} />
          {/* Rutas adicionales */}
          <Route path="/registro" element={<Registro />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/examen" element={<Examen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
