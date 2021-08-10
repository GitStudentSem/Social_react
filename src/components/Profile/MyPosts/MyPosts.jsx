import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  // Принимает на вход массив с данными posts и преобразует его в массив компонент Post
  // Каждый элемент массива имеет название p (сокр. от posts)
  let postsElement = props.state.map((p) => (
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
