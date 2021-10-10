import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";
import { Input } from "../../common/FormsControls/FormsControls";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
  return (
    <form className={s.create_post} onSubmit={props.handleSubmit}>
      <Field
        component={Input}
        name="newPostText"
        className={s.input}
        placeholder="input your message"
        validate={[required, maxLength10]}
      />
      <button className={s.send}>Post</button>
    </form>
  );
};

let AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(
  AddNewPostForm
);

const MyPosts = React.memo((props) => {
  // Принимает на вход массив с данными posts и преобразует его в массив компонент Post
  // Каждый элемент массива имеет название p (сокр. от posts)
  console.log("render1");
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
});

export default MyPosts;
