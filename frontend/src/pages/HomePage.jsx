import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/styles.css';

export default function HomePage() {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    fetch('/news.json')
      .then((res) => res.json())
      .then((data) => setNewsList(data))
      .catch((error) => console.error("Ошибка загрузки новостей:", error));
  }, []);

  return (
    <div className="container">
      <Navbar />

      <section id="news">
        <h1>Новости</h1>
        <div className="news-block">
          {newsList.map((item, index) => (
            <div className="news-item" key={index}>
              {item.image && (
                <div className="image-container">
                  <img src={item.image} alt={item.title} className="news-banner" />
                </div>
              )}
              <div>
                <h3>{item.title}</h3>
                <p><strong>{item.date}</strong></p>
                <p>{item.content.length > 50 ? item.content.slice(0, 50) + "..." : item.content}</p>
                <a href="#">Читать далее</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
