import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import NewsGrid from "./NewsGrid";

export default function Home() {
  const [items, setItems] = useState([]);
  const [active, setActive] = useState(1);
  const [category, setCategory] = useState("general");

  const fetchNewsData = () => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=021baff830cb4c8fa2c688eefdd78b46`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setItems(data.articles);
      });
  };

  useEffect(() => {
    fetchNewsData();
  }, [category]);
  return (
    <div className="App">
      <h1 className="title">Latest News</h1>
      <Menu active={active} setActive={setActive} setCategory={setCategory} />
      <NewsGrid items={items} />
    </div>
  );
}
