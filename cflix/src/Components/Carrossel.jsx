import Carousel from "react-bootstrap/Carousel";
import "../Styls/Scop.css";

function IndividualIntervalsExample(props) {
  return (
    <Carousel>
      <Carousel.Item interval={150}>
        <img className="d-block w-15" src={props.imgLink} alt="First slide" />
        <Carousel.Caption>
          <h3>{props.Film}</h3>
          <p>{props.detalhs}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={100}>
        <img className="d-block w-15" src={props.imgLink} alt="Second slide" />
        <Carousel.Caption>
          <h3>{props.Film}</h3>
          <p>{props.detalhs}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-15" src={props.imgLink} alt="Third slide" />
        <Carousel.Caption>
          <h3>{props.Film}</h3>
          <p>{props.detalhs}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;
