import React, { useState } from "react";
import axios from "axios";
import { url8, url11 } from "./ip/index";
import { useTranslation } from "react-i18next";
import { useAuth } from './authContext';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({ children }) => {
  const { adminAuth } = useAuth();
  const location = useLocation();

  if (!adminAuth) {
    return <Navigate to="/auth" state={{ from: location }} />;
  }

  return children;
};

const ADMIN = () => {
  // Состояния для первой формы
  const [block1, setBlock1] = useState("");
  const [title1, setTitle1] = useState("");
  const [description1, setDescription1] = useState("");
  const [link1, setLink1] = useState("");

  // Состояния для второй формы
  const [block2, setBlock2] = useState("");
  const [title2, setTitle2] = useState("");
  const [description2, setDescription2] = useState("");
  const [link2, setLink2] = useState("");
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const handleSubmit1 = async () => {
    const data = {
      title: title1,
      description: description1,
      link: link1,
      block: block1,
    };

    try {
      const response = await axios.post(url8, data);
      console.log(response.data);
      // здесь можно добавить логику для обработки успешного обновления данных
    } catch (error) {
      console.error(error);
      // здесь можно добавить логику для обработки ошибки при обновлении данных
    }
  };

  const handleSubmit2 = async () => {
    const data = {
      title: title2,
      description: description2,
      link: link2,
      block: block2,
    };

    try {
      const response = await axios.post(url11, data);
      console.log(response.data);
      // здесь можно добавить логику для обработки успешного обновления данных
    } catch (error) {
      console.error(error);
      // здесь можно добавить логику для обработки ошибки при обновлении данных
    }
  };

  return (
    <RequireAuth>
      <div style={styles.bigcontainer}>
        <h1>{t("admin")}</h1>
        <div>
          <h3>{t("rek_on_f")}</h3>
          <label>
            {t("block")}
            <input
              style={styles.vvod}
              type="text"
              value={block1}
              onChange={(event) => setBlock1(event.target.value)}
            />
          </label>
          <br />
          <label>
            {t("title")}
            <input
              style={styles.vvod}
              type="text"
              value={title1}
              onChange={(event) => setTitle1(event.target.value)}
            />
          </label>
          <br />
          <label>
            {t("description")}
            <input
              style={styles.vvod}
              value={description1}
              onChange={(event) => setDescription1(event.target.value)}
            />
          </label>
          <br />
          <label>
            {t("link2")}
            <input
              style={styles.vvod}
              value={link1}
              onChange={(event) => setLink1(event.target.value)}
            />
          </label>
          <br />
          <button style={styles.baton} type="button" onClick={handleSubmit1}>
          {t("send")}
          </button>
        </div>

        <div style={styles.container}>
          <h3>{t("rek_on_p")}</h3>
          <label>
            {t("block")}
            <input
              style={styles.vvod}
              type="text"
              value={block2}
              onChange={(event) => setBlock2(event.target.value)}
            />
          </label>
          <br />
          <label>
            {t("title")}
            <input
              style={styles.vvod}
              type="text"
              value={title2}
              onChange={(event) => setTitle2(event.target.value)}
            />
          </label>
          <br />
          <label>
            {t("description")}
            <input
              style={styles.vvod}
              value={description2}
              onChange={(event) => setDescription2(event.target.value)}
            />
          </label>
          <br />
          <label>
            {t("link2")}
            <input
              style={styles.vvod}
              value={link2}
              onChange={(event) => setLink2(event.target.value)}
            />
          </label>
          <br />
          <button style={styles.baton} type="button" onClick={handleSubmit2}>
            {t("send")}
          </button>
        </div>
      </div>
    </RequireAuth>
  );
};

export default ADMIN;


const styles = {
  bigcontainer: {
    backgroundColor: "#373049",
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
  container: {
   paddingTop: "30px",
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
    marginLeft: 10,
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
    color: "red",
  },
};
