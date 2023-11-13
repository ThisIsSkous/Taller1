import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer-cols">
            <ul>
                <li><a href="/">FAQ</a></li>
                <li><a href="/">Inversionistas</a></li>
                <li><a href="/">Maneras de Mirar</a></li>
                <li><a href="/">Información de la Coporación</a></li>
                <li><a href="/">Originales</a></li>
            </ul>
            <ul>
                <li><a href="/">Películas Recomendadas</a></li>
                <li><a href="/">Series</a></li>
                <li><a href="/">Animación</a></li>
                <li><a href="/">Mi lista</a></li> 
            </ul>
            <ul>
                <li><a href="/">Trabaja con Nosotros</a></li>
                <li><a href="/">Quienes Somos</a></li>
                <li><a href="/">Historia</a></li>
                <li><a href="/">Ver más</a></li>
            </ul>
            <ul>
                <li><a href="/">Ubicación</a></li>
                <li><a href="/">Correo electrónico</a></li>
                <li><a href="/">Contáctanos al: 0960184517</a></li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer