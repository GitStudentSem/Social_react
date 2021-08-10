import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";
import avatar from "./user.svg";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_item}>
        <NavLink
          className={s.dialog}
          to="/dialogs/1"
          activeClassName={s.active}
        >
          <img src={avatar} alt={"user avatar"} className={s.avatar} />
          <p className={s.name}>Первый пользователь</p>
        </NavLink>
        <NavLink
          className={s.dialog}
          to="/dialogs/2"
          activeClassName={s.active}
        >
          <img src={avatar} alt={"user avatar"} className={s.avatar} />
          <p className={s.name}>Второй пользователь</p>
        </NavLink>
        <NavLink
          className={s.dialog}
          to="/dialogs/3"
          activeClassName={s.active}
        >
          <img src={avatar} alt={"user avatar"} className={s.avatar} />
          <p className={s.name}>Третий пользователь</p>
        </NavLink>
        <NavLink
          className={s.dialog}
          to="/dialogs/4"
          activeClassName={s.active}
        >
          <img src={avatar} alt={"user avatar"} className={s.avatar} />
          <p className={s.name}>Четвертый пользователь</p>
        </NavLink>
      </div>
      <div className={s.line}></div>
      <div className={s.messages}>
        <div className={s.message}>Сообщение 1</div>
        <div className={s.message}>Сообщение 2</div>
        <div className={s.message}>Сообщение 3</div>
      </div>
    </div>
  );
};
export default Dialogs;
