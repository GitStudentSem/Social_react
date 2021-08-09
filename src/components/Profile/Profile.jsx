import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div>
      <div className={s.image}></div>
      <div>avatar + description</div>
      <MyPosts />
    </div>
  );
};
export default Profile;
