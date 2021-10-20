import React from "react";
import Preloader from "../../common/preloader/preloader";
import s from "./ProfileInfo.module.css";
import avatar from "../../../assets/images/user.svg";
import ProfileStatusHooks from "./ProfileStatusHooks";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
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
        <p>Как со мной связаться: </p>
        <ul>
          <li>{profile.contacts.github}</li>
          <li>{profile.contacts.vk}</li>
        </ul>
        <ProfileStatusHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};
export default ProfileInfo;
