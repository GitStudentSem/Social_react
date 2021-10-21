import React from "react";
import { reduxForm } from "redux-form";
import { createField, Input } from "../../common/FormsControls/FormsControls";
import s from "../../common/FormsControls/FormsControls.module.css";

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <p>Full name: {createField("Full name", "fullName", [], Input)}</p>
      <p>
        Looking for a job:
        {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
      </p>
      <p>My professional skills:</p>
      {createField(
        "My professional skills",
        "lookingForAJobDescription",
        [],
        Input
      )}
      <p>About me: {createField("About me", "aboutMe", [], Input)}</p>

      <ul>
        Contacts:
        {Object.keys(profile.contacts).map((key) => {
          return (
            <li key={key}>
              {key}: {createField(key, "contacts." + key, [], Input)}
            </li>
          );
        })}
      </ul>
      <button>Save</button>
      {error && <div className={s.formSummaryError}>{error}</div>}
    </form>
  );
};
const ProfileDataFormReduxForm = reduxForm({ form: "edit-profile" })(
  ProfileDataForm
);
export default ProfileDataFormReduxForm;
