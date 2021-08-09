import React from "react";
import s from "./Navbar.module.css";
const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={`${s.item} ${s.active}`}>
        <a className={s.link} href="/profile">
          Profile
        </a>
      </div>
      <div className={s.item}>
        <a className={s.link} href="/dialogs">
          Messages
        </a>
      </div>
      <div className={s.item}>
        <a className={s.link} href="/news">
          News
        </a>
      </div>
      <div className={s.item}>
        <a className={s.link} href="/music">
          Music
        </a>
      </div>
      <div className={s.item}>
        <a className={s.link} href="/settings">
          Settings
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
