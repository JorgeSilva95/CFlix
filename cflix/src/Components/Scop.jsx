import "../Styls/Scop.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CardInfFilm from "./CardInfFilm";
import Carrossel from "./Carrossel.jsx";

function Scop(props) {
  const IMG = "https://www.themoviedb.org/t/p/w300_and_h450_bestv2";

  return (
    <div>
      <CardInfFilm searchFilms={props.searchFilms} FilmURL={IMG}></CardInfFilm>
      {/* 
      <div>{props.Film}</div>
      <div>
        <img src="" alt="" srcset={IMG + props.poster_path} />
        {props.date}
      </div>
      <div>{props.detalhs}</div> */}
    </div>
  );
}

export default Scop;
