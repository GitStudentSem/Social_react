import React from "react";
import s from "./Dialogs.module.css";
import avatar from "./user.svg";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_item}>
        <div className={`${s.dialog} ${s.active}`}>
          <img src={avatar} alt={"user avatar"} className={s.avatar} />
          <p className={s.name}>Первый пользователь</p>
        </div>
        <div className={s.dialog}>
          <img src={avatar} alt={"user avatar"} className={s.avatar} />
          <p className={s.name}>Второй пользователь</p>
        </div>
        <div className={s.dialog}>
          <img src={avatar} alt={"user avatar"} className={s.avatar} />
          <p className={s.name}>Третий пользователь</p>
        </div>
        <div className={s.dialog}>
          <img src={avatar} alt={"user avatar"} className={s.avatar} />
          <p className={s.name}>Четвертый пользователь</p>
        </div>
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
