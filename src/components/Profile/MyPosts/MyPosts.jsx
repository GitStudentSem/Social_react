import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = () => {
  return (
    <div className={s.content}>
      <div>
        <div className={s.create_post}>
          <input
            type="text"
            className={s.input}
            placeholder="input your message"
          />
          <button className={s.send}>Post</button>
        </div>
        <div className={s.posts}>
          <Post message="Первый комментарий" likeCount="12" />
          <Post message="Второй комментарий" likeCount="52" />
          <Post
            message="Далеко-далеко, за словесными горами в стране гласных и согласных живут рыбные тексты"
            likeCount=""
          />
          <Post
            message="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut officiis
        ipsam nisi obcaecati veritatis rem recusandae!"
            likeCount="0"
          />
        </div>
      </div>
    </div>
  );
};
export default MyPosts;
