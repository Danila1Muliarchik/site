import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../styles/styles.css';

export default function Navbar() {
  const [showAbout, setShowAbout] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showContacts, setShowContacts] = useState(false);

  return (
    <>
      <nav className="navbar">
        <header className="header container">
        <Link to="/" className="title-link">
          <div className="title">
            Центр по обеспечению деятельности<br />
            бюджетных организаций<br />
            администрации Заводского района
          </div>
        </Link>
      </header>
        <ul className="nav-menu">
          <li
            className="dropdown"
            onMouseEnter={() => setShowAbout(true)}
            onMouseLeave={() => setShowAbout(false)}
          >
            <a href="#about">О центре</a>
            {showAbout && (
              <ul className="dropdown-menu">
                <li><a href="#about">Об организации</a></li>
                <li><a href="\contacts">Руководство</a></li>
              </ul>
            )}
          </li>
          <li
            className="dropdown"
            onMouseEnter={() => setShowServices(true)}
            onMouseLeave={() => setShowServices(false)}
          >
            <a href="#services">Услуги</a>
            {showServices && (
              <ul className="dropdown-menu">
                <li><a href="#services">Методическая помощь</a></li>
                <li><a href="#services">Ресурсы</a></li>
                <li><a href="#services">Обучение</a></li>
              </ul>
            )}
          </li>
          <li
            className="dropdown"
            onMouseEnter={() => setShowContacts(true)}
            onMouseLeave={() => setShowContacts(false)}
          >
            <a href="/contacts">Контакты</a>
            {showContacts && (
              <ul className="dropdown-menu">
                <li><a href="/contacts#director">Директор</a></li>
                <li><a href="/contacts#manager">Менеджер</a></li>
                <li><a href="/contacts#engineer">Инженер</a></li>
              </ul>
            )}
          </li>
        </ul>
      </nav>

    </>
  );
}
