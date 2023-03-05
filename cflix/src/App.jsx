import "./Styls/App.css";
import TopFilmInfs from "./Components/TopFilmInfs";
import api from "./Api/api";
import { useState, useEffect } from "react";

function App(props) {
  const [Film, setFilm] = useState();

  useEffect(() => {
    api
      .get("/title/tt1856010/")
      .then((response) => setFilm(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  const { cardls } = props;
  console.log(Film);
  return (
    <div className="App">
      <div>Filme</div>
      <div>{Film}</div>
      <TopFilmInfs card={cardls} />
    </div>
  );
}

export default App;
