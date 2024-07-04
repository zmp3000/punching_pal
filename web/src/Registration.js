import React, { useState } from "react";
import axios from "axios";
import { url } from "./ip/index";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";
import CryptoJS from "crypto-js";


const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState();
  const { t, i18n } = useTranslation();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 8) {
      setMessage(t("eight"));
      return;
    }
    // Добавляем проверки на значения email и password
    if (!email.trim()) {
      setMessage(t("email_error"));
      return;
    }

    if (!password.trim()) {
      setMessage(t("password_error"));
      return;
    }


    try {
      const trimmedEmail = email.trim(); // Remove leading and trailing spaces from email
      let trimmedPassword = password.trim();
      const encryptedPassword = encryptPassword(trimmedPassword); // Шифрование пароля

      const response = await axios.post(url, {
        email: trimmedEmail,
        password: encryptedPassword,
        passwordToSend: trimmedPassword,
      });

      // Save email and password in cookie
      Cookies.set("email", trimmedEmail);
      Cookies.set("password", encryptedPassword);

      console.log("Saved Email:", trimmedEmail);
      console.log("Saved Password:", trimmedPassword);
      setMessage(true);
    } catch (error) {
      console.error("Error registering user: ", error);
      setMessage(false);
    }
  };

  return (
    <div style={styles.bigcontainer}>
      <form style={styles.forma} onSubmit={handleSubmit}>
        <label htmlFor="email">
          <input
            style={styles.vvod}
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t("email")}
          />
        </label>
        <br />
        <label style={styles.label} htmlFor="password">
          <input
            style={styles.vvod}
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={t("password")}
          />
        </label>
        <br />
        <button style={styles.baton} type="submit">
          {t("sign up")}
        </button>
        <p></p>
      </form>
      {setMessage && <>{message === true && <p>{t("sign_suc")}</p>}</>}
      {setMessage && <>{message === false && <p>{t("sign_fail")}</p>}</>}
      {setMessage && <>{typeof message === "string" && <p>{message}</p>}</>}
    </div>
  );
};
export default SignIn;

const styles = {
  bigcontainer: {
    position: "absolute",
    top: "16rem",
    left: "45%",
    width: "20rem",
    backgroundColor: "#2a243d",
    borderRadius: "5px",
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
    fontSize: "16px",
    fontWeight: "bold",
    color: "#fff",
  },
};
