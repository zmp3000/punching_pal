import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignIn from "./Registration";
import Auth from "./auth";
import News from "./news";
import Profile from "./profile";
import Filter from "./filter";
import ADMIN from "./ADMIN";
import { AuthProvider } from "./authContext";

function App() {
  const { t, i18n } = useTranslation();

  const [language, setLanguage] = useState(i18n.language);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setLanguage(language);
  };

  return (
    <AuthProvider>
      <Router>
        <div className="container">
          <nav className="nav">
            <ul className="nav-list">
              <li className="nav-item">
              <Link to="/auth" className="nav-link">
                  {t("auth")}
                </Link>
              </li>
              <li className="nav-item">
              <Link to="/signin" className="nav-link">
                  {t("sign up")}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/news" className="nav-link">
                  {t("NEWS")}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/profile" className="nav-link">
                  {t("profile")}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/filter" className="nav-link">
                  {t("filter")}
                </Link>
              </li>
              <li className="nav-item">
                <button
                  className={language === "en" ? "active" : ""}
                  onClick={() => changeLanguage("en")}
                >
                  EN
                </button>
                <button
                  className={language === "ru" ? "active" : ""}
                  onClick={() => changeLanguage("ru")}
                >
                  RU
                </button>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/news" element={<News />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/filter" element={<Filter />} />
            <Route path="/admin" element={<ADMIN />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
