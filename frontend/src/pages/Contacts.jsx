import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/styles.css";

export default function ContactsPage() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("/contacts.json")
      .then((res) => res.json())
      .then((data) => setContacts(data))
      .catch((error) => console.error("Ошибка загрузки контактов:", error));
  }, []);

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
