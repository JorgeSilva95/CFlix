import { useState } from "react";
import "../Styls/CardInfFilm.css";

function CardInfFilm(props) {
  return (
    <div className="CardFilm">
      <div className="IMGBackGround">
        <img src="" alt="" srcset={props.FilmURL + props.Film.backdrop_path} />
      </div>
      <div className="cardInfFil">
        <h1>{props.Film.title}</h1>
        <p>{props.Film.release_date}</p>
        <p>{props.Film.overview}</p>
      </div>
    </div>
  );
}

export default CardInfFilm;
