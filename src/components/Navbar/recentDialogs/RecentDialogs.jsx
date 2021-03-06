import React from "react";
import s from "./RecentDialogs.module.css";
import { NavLink } from "react-router-dom";
import avatar from "./user.svg";

function RecentDialogs(props) {
  let path = `/dialogs/${props.id}`;
  return (
    <NavLink className={s.dialog} to={path} activeClassName={s.active}>
      <img src={avatar} alt={"user avatar"} className={s.avatar} />
      <p className={s.name}>{props.name}</p>
    </NavLink>
  );
}

export default RecentDialogs;
