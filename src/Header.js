import React from 'react';
import './Header.css';
import icon from './Assets/gt.png'

const Header = () => {
  return (
    <header className="header">
        <img src={icon} className='girl'/>
      <h1 className="header-title">My Portfolio</h1>
      <nav className="header-nav">
        <ul className="header-nav-list">
          <li className="header-nav-item"><a href="#about">About</a></li>
          <li className="header-nav-item"><a href="#projects">Projects</a></li>
          <li className="header-nav-item"><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
