import React from "react";
import s from "./../Dialogs.module.css";
import avatar from "./../user.svg";

const Message = (props) => {
  return (
    <div className={s.message}>
      <div className={s.user}>
        <img src={avatar} alt={"user avatar"} className={s.avatar} />
        <p className={s.name}>Имя Фамилия</p>
      </div>
      <p className={s.message_text}>{props.message}</p>
    </div>
  );
};

export default Message;
