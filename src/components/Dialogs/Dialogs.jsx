import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Redirect } from "react-router-dom";

const Dialogs = (props) => {
  let state = props.dialogsPage;
  // Принимает на вход массив с данными dialogs и преобразует его в массив компонент dialogsElements
  // Каждый элемент массива имеет название d (сокр. от dialogs)
  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} key={d.id} />
  ));

  // Принимает на вход массив с данными messages и преобразует его в массив компонент messagesElements
  // Каждый элемент массива имеет название m (сокр. от messages)
  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));

  let newMessageBody = state.newMessageBody;
  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  if (!props.isAuth) {
    return <Redirect to="/login" />;
  }
  return (
    <div className={s.dialogs_wrapper}>
      <div className={s.users}>{dialogsElements}</div>
      <div className={s.line}></div>
      <div className={s.dialog_window}>
        <div className={s.message_wrapper}>{messagesElements}</div>
        <div className={s.input_wrapper}>
          <input
            type="text"
            className={s.input}
            placeholder="input your message"
            onChange={onNewMessageChange}
            value={newMessageBody}
          />
          <button className={s.send} onClick={onSendMessageClick}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
