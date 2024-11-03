import React from 'react'
import './css/Nav.css'
import logo from './assets/img/logo.jpg'

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
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Sobre Nosotros</a></li>
                        <li><a href="#">Servicios</a></li>
                        <li><a href="#">Contactos</a></li>
                    </ul>
                </nav>
                <a href="https://character.ai/chat/0KUEcG9a6D8BLy1zch95VrfxyKVG7WwLJ2hJGXSwhxw" class="btn">Cotizar</a>
            </div>
        </div>
  )
}
