import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";
import { Input } from "../../common/FormsControls/FormsControls";
import s from "../Dialogs.module.css";

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={s.input_wrapper}>
        <Field
          component={Input}
          className={s.input}
          name="newMessageBody"
          placeholder="input your message"
          validate={[required, maxLength50]}
        />
        <button className={s.send}>Send</button>
      </div>
    </form>
  );
};

export default reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm);
