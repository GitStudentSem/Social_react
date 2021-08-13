import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  // Принимает на вход массив с данными dialogs и преобразует его в массив компонент dialogsElements
  // Каждый элемент массива имеет название d (сокр. от dialogs)
  let dialogsElements = props.dialogsPage.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  // Принимает на вход массив с данными messages и преобразует его в массив компонент messagesElements
  // Каждый элемент массива имеет название m (сокр. от messages)
  let messagesElements = props.dialogsPage.messages.map((m) => (
    <Message message={m.message} />
  ));

  let sendMessageElement = React.createRef();

  let sendMessage = () => {
    props.dispatch({
      type: "SEND-MESSAGE",
    });
    // Костыльное решение, по какой-то причине данные
    // зачищаются в state, но поле для ввода не зачищается
    sendMessageElement.current.value = "";
  };

  let onMessageChange = () => {
    let text = sendMessageElement.current.value;
    props.dispatch({
      type: "UPDATE-NEW-MESSAGE-TEXT",
      newText: text,
    });
  };

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
            ref={sendMessageElement}
            onChange={onMessageChange}
            value={props.newMessageText}
          />
          <button className={s.send} onClick={sendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
