import React from "react";
import Preloader from "../../common/preloader/preloader";
import s from "./ProfileInfo.module.css";
import avatar from "../../../assets/images/user.svg";
import ProfileStatusHooks from "./ProfileStatusHooks";

const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div className={s.user}>
        <img src={avatar} alt={"user avatar"} className={s.avatar} />
        <p className={s.name}>{profile.fullName}</p>
        <img src={profile.photos.large} alt={"user avatar"} />
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
