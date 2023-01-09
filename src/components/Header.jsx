import React from 'react'
import Logo from '../assets/logo.svg';

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="logo-box">
          <img src={Logo} alt="Logo" />
        </div>

        <ul className="socials">
          <li>
            <a href="https://www.linkedin.com/in/matheus-kristman-07a947171/" target="_blank" rel="noreferrer noopener" className="linkedin">
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/tinzin.exe/" target="_blank" rel="noreferrer noopener" className="instagram">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/MatheusKristman" target="_blank" rel="noreferrer noopener" className="github">
              <i class="fa-brands fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header