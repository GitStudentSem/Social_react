import React from "react";
import s from "./Navbar.module.css";
const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={`${s.item} ${s.active}`}>
        <a className={s.link} href="#d">
          Profile
        </a>
      </div>
      <div className={s.item}>
        <a className={s.link} href="#d">
          Messages
        </a>
      </div>
      <div className={s.item}>
        <a className={s.link} href="#d">
          News
        </a>
      </div>
      <div className={s.item}>
        <a className={s.link} href="#d">
          Music
        </a>
      </div>
      <div className={s.item}>
        <a className={s.link} href="#d">
          Settings
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
