import "./Styls/App.css";
import api from "./Api/api";
import Header from "./Components/Header";
import { useState, useEffect } from "react";
import HeaderRes from "./Components/HeaderRes.jsx";
import Scop from "./Components/Scop.jsx";
import Login from "./Pages/Login.jsx";

function App(props) {
  const [Film, setFilm] = useState(String);
  const [IDFilmSearch, setIDFilmSearch] = useState(2525);

  useEffect(() => {
    api
      .get(IDFilmSearch + "?api_key=e68b6243bee88c674c06b447bb15c094")
      .then((response) => setFilm(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);
  /* 
  console.log(Film.title); */
  return (
    <div className="App">
      {/* <Scop Film={Film} /> */}
      <Login />
    </div>
  );
}

export default App;
