import React from 'react';
import '../styles/styles.css';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer.jsx";

export default function HomePage() {
  return (
    <div className="container">


      <Navbar />

      <section id="news">
        <h1>Новости</h1>
        <div className="news-block">
          <div className="news-item">
            <div className="image-container">
              <img src="/banner1.jpg" alt="Баннер 1" className="news-banner" />
            </div>
            <div>
              <h3>Обновление системы</h3>
              <p>С 1 сентября 2025 года начнётся внедрение новой системы учета.</p>
              <a href="#">Читать далее</a>
            </div>
          </div>
          <div className="news-item">
            <div className="image-container">
              <img src="/banner1.jpg" alt="Баннер 1" className="news-banner" />
            </div>
            <div>
              <h3>Обучение персонала</h3>
              <p>Планируются курсы повышения квалификации для всех отделов.</p>
              <a href="#">Читать далее</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
}
