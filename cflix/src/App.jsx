import "./Styls/App.css";
import { api, apiSearc } from "./Api/api";
import Header from "./Components/Header";
import { useState, useEffect } from "react";
import HeaderRes from "./Components/HeaderRes.jsx";
import Scop from "./Components/Scop.jsx";
import Login from "./Pages/Login.jsx";
import axios from "axios";

function App(props) {
  const [Film, setFilm] = useState();
  const [searchFilms, setSearchFilms] = useState([]);

  const getSearch = (searchBt) => {
    setFilm(searchBt);
    /* 
    console.log(searchBtn); */
  };

  const clkSearch = () => {
    apiSearc
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=e68b6243bee88c674c06b447bb15c094&query=" +
          Film
      )
      .then((response) => setSearchFilms(response.data.results))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  };

  useEffect(() => {
    api
      .get("upcoming?page=1&api_key=e68b6243bee88c674c06b447bb15c094")
      .then((response) => setSearchFilms(response.data.results))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);
  /* 
  console.log(Film.title); */
  return (
    <div className="App">
      <Header gtSearch={getSearch} clkSearch={clkSearch} />

      <Scop Film={Film} searchFilms={searchFilms} />
      {/* <Login /> */}
    </div>
  );
}

export default App;
