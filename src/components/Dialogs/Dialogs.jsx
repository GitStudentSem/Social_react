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
  let dialogsData = [
    { id: 1, name: "Сырный Творог" },
    { id: 2, name: "Олег Гусин" },
    { id: 3, name: "Гусь Олегович" },
    { id: 4, name: "Самолет Боингов" },
    { id: 5, name: "Азимбег Мамбусабутов" },
  ];
  let messagesData = [
    { id: 1, message: "Простое сообщение" },
    {
      id: 2,
      message:
        "Здесь очень длинное сообщение, посмотри на верстку, видишь как она поехала? Это нужно исправлять, что бы все было ровно и не сдвигалось, попробуй задать максимальную ширину блока, а слишком длинное имя да, да я про тебя говорю 'У Меня Очеь Длинное Имя Что Же делать Как Же Жить' нужно будет заменить на троеточие в конце",
    },
    { id: 3, message: "Подправил, теперь все выглядит около дела" },
  ];
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_item}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
        <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
      </div>
      <div className={s.line}></div>
      <div className={s.messages}>
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
        <Message message={messagesData[2].message} />
      </div>
    </div>
  );
};
export default Dialogs;
