import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`cabeza ${scrolled ? 'scrolled' : ''}`} aria-label="Menú principal">
      <a href="#" className="checkbtn" aria-label="Abrir menú">
        <i className="fas fa-bars"></i>
      </a>
      <a href="#">
        <img src="/img/logo.png" alt="Logo" className="logo" />
      </a>
      <ul className="enlaces">
        <li><a href="#">INICIO</a></li>
        <li><a href="#registro_lass">SERVICIOS</a></li>
        <li><a href="#quienessomos">QUIENES SOMOS</a></li>
        <li><a href="#">BLOG</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
