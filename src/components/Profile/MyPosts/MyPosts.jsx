import React from "react";
import { Field, reduxForm } from "redux-form";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  // Принимает на вход массив с данными posts и преобразует его в массив компонент Post
  // Каждый элемент массива имеет название p (сокр. от posts)
  let postsElement = props.posts.map((p) => (
    <Post key={p.id} message={p.message} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={s.content}>
      <div>
        <AddNewPostFormRedux onSubmit={onAddPost} />
        <div className={s.posts}>
          {/* Этот массив компонент строится через map из массива данных posts*/}
          {postsElement}
        </div>
      </div>
    </div>
  );
};
const AddNewPostForm = (props) => {
  return (
    <form className={s.create_post} onSubmit={props.handleSubmit}>
      <Field
        component="input"
        name="newPostText"
        className={s.input}
        placeholder="input your message"
      />
      <button className={s.send}>Post</button>
    </form>
  );
};
let AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(
  AddNewPostForm
);
export default MyPosts;
