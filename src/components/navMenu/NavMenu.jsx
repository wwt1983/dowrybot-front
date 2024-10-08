import React from "react";
import "./NavMenu.css";

const NavMenu = ({ isOpen }) => {
  return (
    <ul className={`nav-list ${isOpen ? "open" : ""}`}>
      <li>
        <a href="/">Текущие</a>
      </li>

      <li>
        <a href="/history">История раздач</a>
      </li>
      <li>
        <a href="/plan">Скоро в раздачах</a>
      </li>
      <li>
        <a href="https://www.dowry.pro/">О нас</a>
      </li>
    </ul>
  );
};

export default NavMenu;
