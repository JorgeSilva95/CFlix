import { useState } from "react";
import "../Styls/CardInfFilm.css";

function CardInfFilm(props) {
  return (
    <div className="CardFilm">
      <div className="IMGBackGround">
        <img
          src=""
          alt=""
          srcset={props.FilmURL + props.searchFilms.backdrop_path}
        />
      </div>
      <div className="cardInfFil">
        <h1>{props.searchFilms.title}</h1>
        <p>{props.searchFilms.release_date}</p>
        <p>{props.searchFilms.overview}</p>
      </div>
    </div>
  );
}

export default CardInfFilm;
