import React from "react";
import s from "./Header.module.css";
// Для подключения картинок нужно импортировать их
import logo from "../../assets/images/user.svg";
import { NavLink } from "react-router-dom";
const Header = (props) => {
  return (
    <header className={s.header}>
      <img src={logo} alt={"logo"} />
      <div className={s.login_block}>
        {props.isAuth ? (
          <div>
            {props.login} - <button onClick={props.logout}>Log out</button>
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};
export default Header;
