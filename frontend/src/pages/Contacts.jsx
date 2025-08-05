import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles/styles.css";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

import mager from '../assets/Coat_of_arms_of_Belarus.svg.png';

const contacts = [
  {
    id: "director",
    name: "Иван Иванов",
    position: "Директор",
    phone: "+7 (123) 456-7890",
    office: "Каб. 101",
    photo: "https://via.placeholder.com/100",
  },
  {
    id: "manager",
    name: "Ольга Смирнова",
    position: "Менеджер",
    phone: "+7 (987) 654-3210",
    office: "Каб. 102",
    photo: mager,
  },
  {
    id: "engineer",
    name: "Пётр Кузнецов",
    position: "Инженер",
    phone: "+7 (555) 123-4567",
    office: "Каб. 103",
    photo: "https://via.placeholder.com/100",
  },
];

export default function ContactsPage() {
  const location = useLocation();

  useEffect(() => {
    // Если в URL есть hash (например, #manager)
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100); // небольшая задержка, чтобы успела отрисоваться верстка
      }
    }
  }, [location]);

  return (
    <div className="container">
      <Navbar />

      <div className="contacts-page">
        <h1>Контакты</h1>
        {contacts.map((person) => (
          <div key={person.id} className="contact-card" id={person.id}>
            <div className="image-container">
              <img src={person.photo} alt={person.name} />
              </div>
            <div className="contact-info">
              <h2>{person.position}</h2>
              <p><strong>ФИО:</strong> {person.name}</p>
              <p><strong>Телефон:</strong> {person.phone}</p>
              <p><strong>Кабинет:</strong> {person.office}</p>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
