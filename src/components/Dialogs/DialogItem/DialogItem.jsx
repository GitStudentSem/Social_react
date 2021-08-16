import React from "react";
import { NavLink } from "react-router-dom";
import s from "./DialogItem.module.css";
import avatar from "./../../../assets/images/user.svg";

const DialogItem = (props) => {
  let path = `/dialogs/${props.id}`;

  return (
    <NavLink className={s.user} to={path} activeClassName={s.active}>
      <img src={avatar} alt={"user avatar"} className={s.avatar} />
      <p className={s.name}>{props.name}</p>
    </NavLink>
  );
};

export default DialogItem;
