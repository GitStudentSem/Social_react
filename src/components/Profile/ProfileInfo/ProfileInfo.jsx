import React, { useState } from "react";
import Preloader from "../../common/preloader/preloader";
import s from "./ProfileInfo.module.css";
import avatar from "../../../assets/images/user.svg";
import ProfileStatusHooks from "./ProfileStatusHooks";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
  saveProfile,
}) => {
  let [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData) => {
    const promise = saveProfile(formData);
    promise.then(() => {
      setEditMode(false);
    });
  };

  return (
    <div>
      <div className={s.user}>
        <p className={s.name}>{profile.fullName}</p>
        <img
          src={profile.photos.large || avatar}
          alt={"user avatar"}
          className={s.avatar}
        />
        {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
        {editMode ? (
          <ProfileDataForm
            profile={profile}
            initialValues={profile}
            onSubmit={onSubmit}
          />
        ) : (
          <ProfileData
            profile={profile}
            isOwner={isOwner}
            goToEditMode={() => {
              setEditMode(true);
            }}
          />
        )}

        <ProfileStatusHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div>
      <p>Full name: {profile.fullName}</p>
      <p>Looking for a job {profile.lookingForAJob ? "yes" : "no"}</p>
      {profile.lookingForAJob && (
        <p>My professional skills: {profile.lookingForAJobDescription}</p>
      )}
      <p>About me: {profile.aboutMe}</p>
      <ul>
        Contacts:
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          );
        })}
      </ul>
      {isOwner && <button onClick={goToEditMode}>Edit</button>}
    </div>
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <li>
      {contactTitle}: {contactValue}
    </li>
  );
};

export default ProfileInfo;
