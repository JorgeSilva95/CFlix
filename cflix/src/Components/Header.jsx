import { useState, useEffect } from "react";
import "../Styls/Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BiSearch, BiBell } from "react-icons/bi";

function Header() {
  return (
    <div className="cbHeader">
      <h1 className="logo">CLFLIX</h1>
      <div className="primaryNavigation">
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
      </div>

      <div className="secondaryNavigation">
        <button className="cbListRgt">
          <BiSearch className="btns" />
        </button>
        <ul className="cbListRgt">
          <a href="">Infantil</a>
        </ul>
        <button className="cbListRgt">
          <BiBell className="btns" />
        </button>
      </div>
    </div>
  );
}

export default Header;
