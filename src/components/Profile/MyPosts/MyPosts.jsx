import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = () => {
  return (
    <div className={s.content}>
      <div>
        <textarea></textarea>
        <button>Post</button>
        <div>New post</div>
        <div className={s.posts}>
          <Post message="Первый нах" />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </div>
  );
};
export default MyPosts;
