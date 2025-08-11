import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { renderAsync } from 'docx-preview';
import '../styles/styles.css';

export default function NewsPage() {
  const { id } = useParams();
  const [newsItem, setNewsItem] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    fetch('/news.json')
      .then((res) => res.json())
      .then((data) => {
        const found = data[parseInt(id, 10)];
        setNewsItem(found);

        // Если есть файл Word — загружаем и рендерим
        if (found?.wordFile) {
          fetch(found.wordFile)
            .then((res) => res.blob())
            .then((blob) => {
              renderAsync(blob, containerRef.current);
            })
            .catch((err) => console.error("Ошибка загрузки Word файла:", err));
        }
      })
      .catch((error) => console.error("Ошибка загрузки новости:", error));
  }, [id]);

  if (!newsItem) {
    return <div className="container"><p>Загрузка...</p></div>;
  }

  return (
    <div className="container">
      <Navbar />

      <div className="news-full">
        {newsItem.image && (
          <div className="image-container">
            <img
              src={newsItem.image.replace(/\\/g, '/')}
              alt={newsItem.title}
              className="news-banner"
            />
          </div>
        )}

        <h1>{newsItem.title}</h1>
        <p><strong>{newsItem.date}</strong></p>

        {/* Если есть Word файл — рендерим его */}
        {newsItem.wordFile ? (
          <div
            ref={containerRef}
            style={{
              background: '#ffffff',
              padding: '15px',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              overflowX: 'auto'
            }}
          ></div>
        ) : (
          <p>{newsItem.content}</p>
        )}

        <Link to="/" className="btn">Назад</Link>
      </div>

      <Footer />
    </div>
  );
}
