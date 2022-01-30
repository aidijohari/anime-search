import React, { useState, setState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import Header from "./components/Header";

import "./App.css";

function App() {
  const [animeList, setAnimeList] = useState([]);
  const [animeTop, setAnimeTop] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("hello")
    fetchTitles(search);
  };

  const fetchTitles = async (animeName) => {
    const data = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${animeName}&order_by=title&sort=asc&limit=3`
    ).then((res) => res.json());

    setAnimeList(data.results);
  };

  const getAnimeTop = async () => {
    const data = await fetch(
      `https://api.jikan.moe/v3/top/anime/1/bypopularity`
    ).then((res) => res.json());

    setAnimeTop(data.top);
  };

  useEffect(() => {
    getAnimeTop();
  }, []);

  return (
    <>
      <div className="main-container">
        {/* <Header /> */}
        <Home
          handleSearch={handleSearch}
          animeList={animeList}
          animeTop={animeTop}
          search={search}
          setSearch={setSearch}
        />
      </div>
    </>
  );
}

export default App;
