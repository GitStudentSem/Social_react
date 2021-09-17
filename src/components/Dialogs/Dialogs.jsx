import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";

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

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  };

  if (!props.isAuth) {
    return <Redirect to={"/login"} />;
  }
  return (
    <div className={s.dialogs_wrapper}>
      <div className={s.users}>{dialogsElements}</div>
      <div className={s.line}></div>
      <div className={s.dialog_window}>
        <div className={s.message_wrapper}>{messagesElements}</div>
        <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={s.input_wrapper}>
        <Field
          component="input"
          className={s.input}
          name="newMessageBody"
          placeholder="input your message"
          // onChange={onNewMessageChange}
          // value={newMessageBody}
        />
        <button className={s.send}>Send</button>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(
  AddMessageForm
);
export default Dialogs;
