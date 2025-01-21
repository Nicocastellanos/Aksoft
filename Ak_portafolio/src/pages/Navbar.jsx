import React from 'react'
import '../css/Nav.css'
import logo from '../assets/img/logo/aksoft.png'

export default function Navbar() {
  return (
        <div class="container">
            <div class="logo">
                <a href="#">
                    <img src={logo} alt="Aksoft" />
                </a>
            </div>
            <div class="menu">
                <nav>
                    <ul>
                        <li><a href="/" className='link'>Inicio</a></li>
                        <li><a href="/aboutus" className='link'>Sobre Nosotros</a></li>
                        <li><a href="/services" className='link'>Servicios</a></li>
                        <li><a href="/contact" className='link'>Contactos</a></li>
                    </ul>
                </nav>
                <a href="https://character.ai/chat/0KUEcG9a6D8BLy1zch95VrfxyKVG7WwLJ2hJGXSwhxw" class="btn">Cotizar</a>
            </div>
        </div>
  )
}
