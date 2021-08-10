import React from "react";
import s from "./ProfileInfo.module.css";
import avatar from "./user.svg";

const ProfileInfo = () => {
  return (
    <div>
      <div className={s.image}></div>
      <div>
        <img src={avatar} alt={"user avatar"} className={s.avatar} />
        <p className={s.name}>Имя Фамилия</p>
      </div>
    </div>
  );
};
export default ProfileInfo;
