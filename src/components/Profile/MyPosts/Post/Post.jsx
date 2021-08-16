import React from "react";
import s from "./Post.module.css";
import userAvatar from "../../../../assets/images/user.svg";
const Post = (props) => {
  return (
    <div className={s.item}>
      <img className={s.avatar} src={userAvatar} alt={"user avatar"} />
      <p className={s.text}>{props.message}</p>
      <div className={s.like}>
        <button className={s.like_button}></button>
        <p className={s.like_count}>{props.likesCount}</p>
      </div>
    </div>
  );
};
export default Post;
