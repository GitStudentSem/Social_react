import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  // Принимает на вход массив с данными dialogs и преобразует его в массив компонент dialogsElements
  // Каждый элемент массива имеет название d (сокр. от dialogs)
  let dialogsElements = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  // Принимает на вход массив с данными messages и преобразует его в массив компонент messagesElements
  // Каждый элемент массива имеет название m (сокр. от messages)
  let messagesElements = props.state.messages.map((m) => (
    <Message message={m.message} />
  ));

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
