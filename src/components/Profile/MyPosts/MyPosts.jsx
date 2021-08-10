import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = () => {
  let postData = [
    { id: 1, message: "Первый комментарий", likesCount: 12 },
    { id: 2, message: "Второй комментарий", likesCount: 0 },
    {
      id: 3,
      message:
        "Далеко-далеко, за словесными горами в стране гласных и согласных живут рыбные тексты",
      likesCount: 999,
    },
    { id: 4, message: "Какая-то запись на стене профиля", likesCount: 1177 },
  ];
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
          <Post
            message={postData[0].message}
            likesCount={postData[0].likesCount}
          />
          <Post
            message={postData[1].message}
            likesCount={postData[1].likesCount}
          />
          <Post
            message={postData[2].message}
            likesCount={postData[2].likesCount}
          />
          <Post
            message={postData[3].message}
            likesCount={postData[3].likesCount}
          />
        </div>
      </div>
    </div>
  );
};
export default MyPosts;
