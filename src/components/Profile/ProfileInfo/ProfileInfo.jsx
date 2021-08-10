import React from "react";
import s from "./ProfileInfo.module.css";
import avatar from "./user.svg";

const ProfileInfo = (props) => {
  return (
    <div>
      <div className={s.image}></div>
      <div className={s.user}>
        <img src={avatar} alt={"user avatar"} className={s.avatar} />
        <p className={s.name}>Имя Фамилия</p>
      </div>
    </div>
  );
};
export default ProfileInfo;
