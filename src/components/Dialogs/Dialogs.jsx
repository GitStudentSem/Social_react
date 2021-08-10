import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  // Исходная база данных для пользователей в диалогах
  let dialogs = [
    { id: 1, name: "Сырный Творог" },
    { id: 2, name: "Олег Гусин" },
    { id: 3, name: "Гусь Олегович" },
    { id: 4, name: "Самолет Боингов" },
    { id: 5, name: "Азимбег Мамбусабутов" },
  ];

  // Исходная база данных для каждого сообщения
  let messages = [
    { id: 1, message: "Простое сообщение" },
    {
      id: 2,
      message:
        "Здесь очень длинное сообщение, посмотри на верстку, видишь как она поехала? Это нужно исправлять, что бы все было ровно и не сдвигалось, попробуй задать максимальную ширину блока, а слишком длинное имя да, да я про тебя говорю 'У Меня Очеь Длинное Имя Что Же делать Как Же Жить' нужно будет заменить на троеточие в конце",
    },
    { id: 3, message: "Подправил, теперь все выглядит около дела" },
  ];

  // Принимает на вход массив с данными dialogs и преобразует его в массив компонент dialogsElements
  // Каждый элемент массива имеет название d (сокр. от dialogs)
  let dialogsElements = dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  // Принимает на вход массив с данными messages и преобразует его в массив компонент messagesElements
  // Каждый элемент массива имеет название m (сокр. от messages)
  let messagesElements = messages.map((m) => <Message message={m.message} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_item}>
        {/* Этот массив компонент строится через map из массива данных dialogs*/}
        {dialogsElements}
      </div>
      <div className={s.line}></div>
      <div className={s.messages}>
        {/* Этот массив компонент строится через map из массива данных messages*/}
        {messagesElements}
      </div>
    </div>
  );
};
export default Dialogs;
