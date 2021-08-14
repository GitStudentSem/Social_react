import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  // Принимает на вход массив с данными posts и преобразует его в массив компонент Post
  // Каждый элемент массива имеет название p (сокр. от posts)
  let postsElement = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={s.content}>
      <div>
        <div className={s.create_post}>
          <input
            type="text"
            className={s.input}
            placeholder="input your message"
            ref={newPostElement}
            onChange={onPostChange}
            value={props.newPostText}
          />
          <button className={s.send} onClick={onAddPost}>
            Post
          </button>
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
