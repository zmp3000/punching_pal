import React, { useState, useEffect } from "react";
import axios from "axios";
import { url3 } from "./ip/index";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const News = () => {
  const [news, setNews] = useState([]);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(url3);
        setNews(response.data.articles);
      } catch (error) {
        console.error(t("news_er"), error);
      }
    };
    fetchNews();
  }, []);

  return (
    <div style={styles.bigcontainer}>
      <div style={styles.container}>
        <Link to="/profile" className="icon-link"></Link>
        <h1 style={styles.title}>{t("news")}</h1>
        <Link to="/filter" className="icon-link"></Link>
      </div>

      <ul style={styles.newsList}>
        {news.map((item) => (
          <li key={item.title} style={styles.newsItem}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <Link to={item.url}>{t("link")}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;

const styles = {
  bigcontainer: {
    position: 'absolute',
    paddingLeft: "13%",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    marginBottom: "20px",
    backgroundColor: "#2a243d",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#fff",
  },
  newsList: {
    listStyleType: "none",
    padding: 0,
  },
  newsItem: {
    border: "2px solid #7c5dfa",
    padding: "16px",
    marginBottom: "1px",
    backgroundColor: "#373049",
    color: "#fff",
  },
  link: {
    color: "#7c5dfa",
    textDecoration: "none",
  },
};
