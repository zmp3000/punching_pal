import React, { useState, useEffect } from "react";
import axios from "axios";
import { url5, url9, url10 } from "./ip/index";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";

const Filter = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [martialArts, setMartialArts] = useState("");
  const [rank, setRank] = useState("");
  const [additionalDetails, setAdditionalDetails] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [title2, setTitle2] = useState("");
  const [description2, setDescription2] = useState("");
  const [link2, setLink2] = useState("");
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const handleSubmit = async () => {
    if (!name && !age && !weight && !height && !martialArts && !rank && !additionalDetails) {
      alert(t("one")); // Вы можете изменить текст ошибки на нужный вам
      return;
    }
    try {
      const response = await axios.post(url5, {
        email,
        password,
        name: name || undefined,
        age: age || undefined,
        weight: weight || undefined,
        height: height || undefined,
        martial_arts: martialArts || undefined,
        rank: rank || undefined,
        additional_details: additionalDetails || undefined,
      });
      console.log(response.data);
      setSearchResults(response.data);
    } catch (error) {
      console.error(error);
      // здесь можно добавить логику для обработки ошибки при отправке данных на сервер
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userEmail = Cookies.get("email");
        const userPassword = Cookies.get("password");
        const response = await axios.get(url9);
        setTitle(response.data.title);
        setDescription(response.data.description);
        setLink(response.data.link);

        const response2 = await axios.get(url10);
        setTitle2(response2.data.title);
        setDescription2(response2.data.description);
        setLink2(response2.data.link);
        if (userEmail !== undefined && userPassword !== undefined) {
          setEmail(userEmail);
          setPassword(userPassword);
          console.log(userEmail, userPassword);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div style={styles.bigcontainer}>
        <h1>{t("filter")}</h1>
        <p>{t("filter_g")}</p>
        <form style={styles.forma}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t("name")}
            style={styles.vvod}
          />
          <input
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder={t("age")}
            style={styles.vvod}
          />
          <input
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder={t("weight")}
            style={styles.vvod}
          />
          <input
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder={t("height")}
            style={styles.vvod}
          />
          <input
            value={martialArts}
            onChange={(e) => setMartialArts(e.target.value)}
            placeholder={t("martial")}
            style={styles.vvod}
          />
          <input
            value={rank}
            onChange={(e) => setRank(e.target.value)}
            placeholder={t("rank")}
            style={styles.vvod}
          />
          <input
            value={additionalDetails}
            onChange={(e) => setAdditionalDetails(e.target.value)}
            placeholder={t("additional")}
            style={styles.vvod}
          />
          <button type="button" onClick={handleSubmit} style={styles.baton}>
            {t("search")}
          </button>
        </form>
        {searchResults.length > 0 && (
          <div>
            <p>{t("search_res")}:</p>
            {searchResults.map((result, index) => (
              <div key={index} style={styles.searchResults}>
                <p>{t("name")}: {result.name}</p>
                <p>{t("age")}: {result.age}</p>
                <p>{t("weight")}: {result.weight}</p>
                <p>{t("height")}: {result.height}</p>
                <p>{t("martial")}: {result.martial_arts}</p>
                <p>{t("rank")}: {result.rank}</p>
                <p>{t("additional")}: {result.additional_details}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div style={styles.bigcontainer2}>
        <p>{title}</p>
        <br />
        <p>{description}</p>
        <br />
        <a
          style={styles.vvod}
          href={link}
          target="\_blank"
          rel="noopener noreferrer"
        >
          {t("link")}
        </a>
      </div>
      <div style={styles.bigcontainer3}>
        <p>{title2}</p>
        <br />
        <p>{description2}</p>
        <br />
        <a
          style={styles.vvod}
          href={link2}
          target="\_blank"
          rel="noopener noreferrer"
        >
          {t("link")}
        </a>
      </div>
    </div>
  );
};

const styles = {
  searchResults: {
    padding: "10px",
    marginBottom: "10px",
  },
  
  bigcontainer: {
    position: "absolute",
    top: "4rem",
    left: "38%",
    right: "35%",
    width: "20rem",
    backgroundColor: "#2a243d",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "7px",
  },

  bigcontainer2: {
    position: "absolute",
    marginLeft: "20%",
    top: "10rem",
    left: "60%",
    right: "5%", // Adjusted from 25% to 5%
    width: "11rem",
    backgroundColor: "#373049",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "7px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
  },

  bigcontainer3: {
    position: "absolute",
    marginLeft: "20%",
    top: "25rem",
    left: "60%",
    right: "5%", // Adjusted from 25% to 5%
    width: "11rem",
    backgroundColor: "#373049",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "7px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
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
    marginBottom: "30px",
  },
};

export default Filter;
