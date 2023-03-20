import "../Styls/Perfs.css";
import { BiLock } from "react-icons/bi";
export default function Perfs() {
  const url =
    "http://occ-0-819-185.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABYH07rnzkjjF5a-70fBB0hAiq-5YcsMlWhfF3OqbLDvehfLr7dULQ9jw6BNuQ20GjWJU349M1lXhgSSAnD3eyJO3Jdi8cap9P19a.png";
  return (
    <div className="perfCard">
      <button
        onClick={() => {
          alert("Deu certo");
        }}
      >
        <img srcSet={url} alt="Perfil" />
        <p>Jorge</p>
      </button>
      <BiLock className="lockIcon" />
    </div>
  );
}
