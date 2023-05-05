import "../Styls/Scop.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CardInfFilm from "./CardInfFilm";
import Carrossel from "./Carrossel.jsx";

function Scop(props) {
  const IMG = "https://www.themoviedb.org/t/p/w300_and_h450_bestv2";
  const ListFilms = props.searchFilms;
  console.log(props.searchFilms[0]);

  return (
    <div>
      {ListFilms.map((film) => (
        <CardInfFilm searchFilms={film} FilmURL={IMG}></CardInfFilm>
      ))}
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
