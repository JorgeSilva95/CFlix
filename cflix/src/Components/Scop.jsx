import "../Styls/Scop.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Scop(props) {
  const IMG = "https://image.tmdb.org/t/p/w600_and_h900_bestv2/";
  console.log(props.date);
  return (
    <div>
      <div>{props.Films}</div>
      <div>
        <img src="" alt="" srcset={IMG + props.poster_path} />
        {props.date}
      </div>
      <div>{props.detalhs}</div>
    </div>
  );
}

export default Scop;
