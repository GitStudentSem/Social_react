import React from "react";
import s from "./Post.module.css";
import userAvatar from "./user.svg";
const Post = () => {
  return (
    <div className={s.item}>
      <img className={s.avatar} src={userAvatar} alt={"user avatar"} />
      <p className={s.text}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut officiis
        ipsam nisi obcaecati veritatis rem recusandae! Adipisci earum laboriosam
        consequatur at nobis ut pariatur vero libero, temporibus, reprehenderit
        officiis tenetur!
      </p>
      <button className={s.like}></button>
    </div>
  );
};
export default Post;
