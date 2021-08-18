import React from "react";
import Preloader from "../../common/preloader/preloader";
import s from "./ProfileInfo.module.css";
import avatar from "../../../assets/images/user.svg";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div className={s.image}></div>
      <div className={s.user}>
        <img src={avatar} alt={"user avatar"} className={s.avatar} />
        <p className={s.name}>{props.profile.fullName}</p>
        <img src={props.profile.photos.large} alt={"user avatar"} />
        <p>Как со мной связаться: </p>
        <ul>
          <li>{props.profile.contacts.github}</li>
          <li>{props.profile.contacts.vk}</li>
          <li>{props.profile.contacts.facebook}</li>
          <li>{props.profile.contacts.instagram}</li>
          <li>{props.profile.contacts.twitter}</li>
          <li>{props.profile.contacts.website}</li>
          <li>{props.profile.contacts.youtube}</li>
          <li>{props.profile.contacts.mainLink}</li>
        </ul>
      </div>
    </div>
  );
};
export default ProfileInfo;
