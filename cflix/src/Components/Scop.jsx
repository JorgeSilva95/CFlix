import "../Styls/Scop.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CardInfFilm from "./CardInfFilm";
import Carrossel from "./Carrossel.jsx";

function Scop(props) {
  const IMG = "https://image.tmdb.org/t/p/w600_and_h900_bestv2/";
  console.log(props.date);
  return (
    <div>
      <CardInfFilm Film={props.Film} FilmURL={IMG}></CardInfFilm>
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
