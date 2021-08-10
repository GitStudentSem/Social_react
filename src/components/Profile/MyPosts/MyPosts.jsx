import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = () => {
  // Исходная база данных для каждого поста на стене
  let posts = [
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

  // Принимает на вход массив с данными posts и преобразует его в массив компонент Post
  // Каждый элемент массива имеет название p (сокр. от posts)
  let postsElement = posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

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
          {/* Этот массив компонент строится через map из массива данных posts*/}
          {postsElement}
        </div>
      </div>
    </div>
  );
};
export default MyPosts;
