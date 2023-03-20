import "../Styls/CardPerfs.css";
import Perfs from "./Perfs";

function CardPerfs() {
  return (
    <div className="container cardPerfs">
      <h1>Quem está assistindo?</h1>
      <div className="perfsContainer">
        <Perfs />
        <Perfs />
        <Perfs />
      </div>
      <button className="btnPadrao">Gerenciar perfis</button>
    </div>
  );
}

export default CardPerfs;
