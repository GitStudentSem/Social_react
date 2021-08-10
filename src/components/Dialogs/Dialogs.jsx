import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";
import avatar from "./user.svg";

const DialogItem = (props) => {
  let path = `/dialogs/${props.id}`;

  return (
    <NavLink className={s.dialog} to={path} activeClassName={s.active}>
      <img src={avatar} alt={"user avatar"} className={s.avatar} />
      <p className={s.name}>{props.name}</p>
    </NavLink>
  );
};

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

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_item}>
        <DialogItem name="Сырный Творог" id="1" />
        <DialogItem name="Олег Гусин" id="2" />
        <DialogItem name="Гусь Олегович" id="3" />
        <DialogItem name="Самолет Боингов" id="4" />
        <DialogItem name="Азимбег Мамбусабутов" id="5" />
        <DialogItem
          name="У Меня Очеь Длинное Имя Что Же делать Как Же Жить"
          id="6"
        />
        <DialogItem name="У" id="7" />
        <DialogItem name="Имя Пользователя" id="8" />
      </div>
      <div className={s.line}></div>
      <div className={s.messages}>
        <Message message="Простое сообщение" />
        <Message message='Здесь очень длинное сообщение, посмотри на верстку, видишь как она поехала? Это нужно исправлять, что бы все было ровно и не сдвигалось, попробуй задать максимальную ширину блока, а слишком длинное имя да, да я про тебя говорю "У Меня Очеь Длинное Имя Что Же делать Как Же Жить" нужно будет заменить на троеточие в конце' />
        <Message message="Подправил, теперь все выглядит около дела" />
      </div>
    </div>
  );
};
export default Dialogs;
