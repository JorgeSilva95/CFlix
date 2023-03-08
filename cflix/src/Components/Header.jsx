import { useState, useEffect } from "react";
import "../Styls/Header.css";

function Header() {
  return (
    <div className="cbHeader">
      <h1 className="logo">CLFLIX</h1>
      <ul className="cbList">Inicio</ul>
      <ul className="cbList">Séries</ul>
      <ul className="cbList">Filmes</ul>
      <ul className="cbList">Bombando</ul>
      <ul className="cbList">Minha Lista</ul>
      <ul className="cbList">Navegar por idiomas</ul>
      <div className="cbListRgt">
        <input className="cbListRgt" type="text" />
        <ul className="cbListRgt">Infantil</ul>
        <ul className="cbListRgt">Avisos</ul>
        <ul className="cbListRgt">Perfil</ul>
      </div>
    </div>
  );
}

export default Header;
