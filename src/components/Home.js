import Card from "../components/Card";
import { useState } from "react";
import { TextField } from "@mui/material";

function Home(props) {
  const [lowerLimit, setLowerLimit] = useState(0);
  const [upperLimit, setUpperLimit] = useState(12);

  const nextTopAnime = () => {
    setLowerLimit(upperLimit);
    setUpperLimit(upperLimit + 12);
  };

  const prevTopAnime = () => {
    setUpperLimit(lowerLimit);
    setLowerLimit(lowerLimit - 12);
  };

  return (
    <main>
      <div className="main-container">
        <div className="search-container">
          <form className="search-box" onSubmit={props.handleSearch}>
            <TextField
              id="outlined-basic"
              label="Search"
              variant="outlined"
              value={props.search}
              onChange={(e) => props.setSearch(e.target.value)}
            />
          </form>
        </div>
        {props.search ? (
          <div className="card-main red">
            {props.animeList.map((anime) => (
              <Card anime={anime} key={anime.mal_id} />
            ))}
          </div>
        ) : (
          <div className="card-main">
            {props.animeTop.slice(lowerLimit, upperLimit).map((anime) => (
              <Card anime={anime} key={anime.mal_id} />
            ))}
          </div>
        )}
      </div>
      <div className="next-button">
        <button onClick={nextTopAnime}>Clicky</button>
      </div>
      <div className="prev-button">
        <button onClick={prevTopAnime}>Prevy</button>
      </div>
    </main>
  );
}

export default Home;
