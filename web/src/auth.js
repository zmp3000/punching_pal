import React, { useState } from "react";
import axios from "axios";
import { url4 } from "./ip/index";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "./authContext";
import CryptoJS from "crypto-js";


const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLink, setShowLink] = useState(false);
  const { t, i18n } = useTranslation();
  const [adminAuth, setAdminAuth] = useState(false);
  const { login } = useAuth();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const encryptPassword = (password) => {
    const algorithm = "AES";
    const key = "secretKey"; // Ключ должен быть длиной 256 бит (32 байта)

    // Преобразуем ключ в буфер
    const keyBuffer = CryptoJS.enc.Utf8.parse(key);

    // Преобразуем пароль в буфер
    const passwordBuffer = CryptoJS.enc.Utf8.parse(password);

    // Шифруем пароль
    const encryptedPassword = CryptoJS.AES.encrypt(passwordBuffer, keyBuffer, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    }).toString();

    return encryptedPassword;
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log("Button clicked");
    console.log(email, password);
    try {
      const trimmedEmail = email.trim(); // Remove leading and trailing spaces from email
      let trimmedPassword = password.trim();
      const encryptedPassword = encryptPassword(trimmedPassword); // Шифрование пароля

      const response = await axios.post(url4, {
        email: trimmedEmail,
        password: encryptedPassword,
      });
      setShowLink(true);
      setMessage(true);
      Cookies.set("email", trimmedEmail);
      Cookies.set("password", encryptedPassword);
      console.log(response.data);
      // Update the isAuthenticated state to true
      setIsAuthenticated(true);
      setAdminAuth(true);
      login();
    } catch (error) {
      setShowLink(false);
      setMessage(false);
      console.error("Error logging in: ", error);
    }
  };

  return (
    <div style={styles.bigcontainer}>
      <form style={styles.forma} onSubmit={handleLogin} autoComplete="off">
        <input
          style={styles.vvod}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder={t("email")}
        />
        <input
          style={styles.vvod}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          placeholder={t("password")}
        />
        <button style={styles.baton} type="submit">
          {t("auth")}
        </button>
        <p style={styles.message}>{message}</p>
      </form>
      {setMessage && <>{message === true && <p>{t("auth_suc")}</p>}</>}
      {setMessage && <>{message === false && <p>{t("auth_fail")}</p>}</>}
      {isAuthenticated &&
        email === "admin@gmail.com" &&
        password === "12345678" && (
          <p>
            <Link to="/admin">{t("adminPanel")}</Link>
          </p>
        )}
    </div>
  );
};

export default Auth;

const styles = {
  bigcontainer: {
    position: "absolute",
    borderRadius: "7px",
    top: "16rem",
    left: "45%",
    width: "20rem",
    backgroundColor: "#2a243d",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  forma: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  vvod: {
    fontSize: "16px",
    border: "2px solid #7c5dfa",
    borderRadius: "5px",
    backgroundColor: "#373049",
    color: "#fff",
    marginTop: "10px",
    marginBottom: "10px",
  },
  baton: {
    marginTop: "10px",
    fontSize: "16px",
    fontWeight: "bold",
    borderColor: "#fff",
    borderRadius: "5px",
    backgroundColor: "#333333",
    color: "#fff",
    cursor: "pointer",
  },
  message: {
    marginTop: 10,
  },
};
