import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage.jsx';
import ContactsPage from "./pages/Contacts.jsx";
import NewsPage from './pages/NewsPage';
import './styles/styles.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/news/:id" element={<NewsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
