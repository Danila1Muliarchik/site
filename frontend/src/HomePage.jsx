import React from 'react';

export default function HomePage() {
  return (
    <div className="container">
      <header className="header">
        <div className="title">
          Центр по обеспечению деятельности<br /> бюджетных организаций<br /> администрации Заводского района
        </div>
      </header>

      <nav className="navbar">
        <ul className="nav-menu">
          <li><a href="#about">О центре</a></li>
          <li><a href="#services">Услуги</a></li>
          <li><a href="#documents">Документы</a></li>
          <li><a href="#news">Новости</a></li>
          <li><a href="#contacts">Контакты</a></li>
        </ul>
      </nav>

      <section id="about">
        <h1>О центре</h1>
        <p>Центр по обеспечению деятельности бюджетных организаций администрации Заводского района занимается координацией и поддержкой деятельности учреждений района.</p>
      </section>

      <section id="services">
        <h2>Наши услуги</h2>
        <ul>
          <li>Методическое сопровождение и консультации</li>
          <li>Обеспечение необходимыми ресурсами и документацией</li>
          <li>Организация обучения и повышения квалификации</li>
          <li>Контроль и анализ выполнения бюджетных программ</li>
        </ul>
      </section>

      <section id="documents">
        <h2>Документы</h2>
        <table>
          <thead>
            <tr>
              <th>Название документа</th>
              <th>Дата</th>
              <th>Скачать</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Положение о центре</td>
              <td>01.01.2025</td>
              <td><a href="#!">Скачать PDF</a></td>
            </tr>
            <tr>
              <td>Отчёт за 2024 год</td>
              <td>15.07.2025</td>
              <td><a href="#!">Скачать PDF</a></td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="news">
        <h2>Новости</h2>
        <div className="card">
          <div className="card-header">Обновление информационной системы</div>
          <div className="card-body">
            С 1 сентября 2025 года начнётся внедрение новой системы учета для всех бюджетных учреждений района.
          </div>
        </div>
        <div className="card">
          <div className="card-header">План обучения сотрудников</div>
          <div className="card-body">
            Запланированы курсы повышения квалификации для работников всех отделов центра.
          </div>
        </div>
      </section>

      <section id="contacts">
        <h2>Контакты</h2>
        <p>Адрес: г. Минск, Заводской район, ул. Примерная, 10</p>
        <p>Телефон: +375 (17) 123-45-67</p>
        <p>Email: info@zavodcenter.by</p>
      </section>

      <footer className="footer">
        <p>© 2025 Центр по обеспечению деятельности бюджетных организаций администрации Заводского района</p>
        <p>
          <a href="#!">Политика конфиденциальности</a> | <a href="#!">Карта сайта</a>
        </p>
      </footer>
    </div>
  );
}
