import { useState, useEffect } from "react";
import "../Styls/Header.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <div className="cbHeader">
      <h1 className="logo">CLFLIX</h1>
      <ul className="cbList">
        <a href="">Inicio</a>
      </ul>
      <ul className="cbList">
        <a href="">Séries</a>
      </ul>

      <ul className="cbList">
        <a href="">Filmes</a>
      </ul>

      <ul className="cbList">
        <a href="">Bombando</a>
      </ul>

      <ul className="cbList">
        <a href="">Minha Lista</a>
      </ul>

      <ul className="cbList">
        <a href="">Navegar por idiomas</a>
      </ul>

      <div className="cbListRgt">
        <input className="cbListRgt" type="text" />
        <a href="">Busca</a>
        <ul className="cbListRgt">
          <a href="">Infantil</a>
        </ul>

        <ul className="cbListRgt">
          <a href="">Avisos</a>
        </ul>
      </div>
    </div>
  );
}

export default Header;
