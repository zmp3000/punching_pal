import React, { useState, useEffect } from "react";
import axios from "axios";
import { url2, url7, url12, url13 } from "./ip/index";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";

export default function Profile() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [martialArts, setMartialArts] = useState("");
  const [rank, setRank] = useState("");
  const [additionalDetails, setAdditionalDetails] = useState("");
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("red");
  const [showLink, setShowLink] = useState(false);
  const [userData, setUserData] = useState({});
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

  useEffect(() => {
    const getData = async () => {
      const userEmail = Cookies.get("email");
      const userPassword = Cookies.get("password");
      const response = await axios.get(url12);
        setTitle(response.data.title);
        setDescription(response.data.description);
        setLink(response.data.link);

        const response2 = await axios.get(url13);
        setTitle2(response2.data.title);
        setDescription2(response2.data.description);
        setLink2(response2.data.link);
      if (userEmail !== undefined && userPassword !== undefined) {
        setEmail(userEmail);
        setPassword(userPassword);
        console.log(userEmail, userPassword);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const GetData = async () => {
      await handleGetProfile();
    };
    GetData();
  }, [email, password]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      !name ||
      !age ||
      !weight ||
      !height ||
      !martialArts ||
      !rank ||
      !additionalDetails
    ) {
      setMessage(t("obi"));
      setMessageColor("red");
      setShowLink(false);
      return;
    }
    try {
      const response = await axios.post(url2, {
        email,
        password,
        name,
        age,
        weight,
        height,
        martial_arts: martialArts,
        rank,
        additional_details: additionalDetails,
      });
      setMessage(t("savesuc"));
      setMessageColor("green");
      setShowLink(true);
    } catch (error) {
      console.error("Error saving user details: ", error);
      setMessage(t("ersave"));
      setMessageColor("red");
      setShowLink(false);
    }
  };

  const handleGetProfile = async () => {
    try {
      const response = await axios.post(url7, {
        email,
        password,
      });
      console.log("res", response.data.password)
      const { title, description, link } = response.data;

      const {
        name,
        age,
        weight,
        height,
        martial_arts,
        rank,
        additional_details,
      } = response.data;
      setName(name);
      setAge(age);
      setWeight(weight);
      setHeight(height);
      setMartialArts(martial_arts);
      setRank(rank);
      setAdditionalDetails(additional_details);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={styles.zalil}>
    <div style={styles.bigcontainer}>
      <h1>{t("profile")}</h1>
      <form style={styles.forma} onSubmit={handleSubmit}>
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
        <button type="submit" onClick={handleSubmit} style={styles.baton}>
        {t("edit")}
        </button>
        <div>{message}</div>
      </form>
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
}

const styles = {
  zalil: {
    backgroundColor: "#373049",
  },
  bigcontainer: {
    position: "absolute",
    top: "5rem",
    left: "45%",
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
  message: {
    textAlign: "center",
    marginTop: 10,
  },
};
