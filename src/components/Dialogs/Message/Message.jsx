import React from "react";
import s from "./Message.module.css";
import avatar from "../../../assets/images/user.svg";

const Message = (props) => {
  return (
    <div className={s.message}>
      <div className={s.message_user}>
        <img src={avatar} alt={"user avatar"} className={s.avatar} />
        <p className={s.name}>Имя Фамилия</p>
      </div>
      <p className={s.message_text}>{props.message}</p>
    </div>
  );
};

export default Message;
