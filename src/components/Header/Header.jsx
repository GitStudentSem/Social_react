import React from "react";
import s from "./Header.module.css";
// Для подключения картинок нужно импортировать их
import logo from "./logo.svg";
const Header = () => {
  return (
    <header className={s.header}>
      <img src={logo} alt={"logo"} />
    </header>
  );
};
export default Header;
