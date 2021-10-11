import profileReducer, { addPost, deletePost } from "./profileReducer";
import ReactDOM from "react-dom";
import React from "react";

let state = {
  posts: [
    { id: 1, message: "Первый комментарий", likesCount: 12 },
    { id: 2, message: "Второй комментарий", likesCount: 11 },
    { id: 3, message: "Третий комментарий", likesCount: 10 },
    { id: 4, message: "Четвертый комментарий", likesCount: 9 },
  ],
};

test("count of posts should be incremented", () => {
  let action = addPost("Новый текст поста");

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(5);
});

test("message of new post should be correct", () => {
  let action = addPost("Новый текст поста");

  let newState = profileReducer(state, action);

  expect(newState.posts[4].message).toBe("Новый текст поста");
});

test("after deleting length of messages should be decrement", () => {
  let action = deletePost(1);

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(3);
});

test("after deleting count should not be changed if id is incorrect", () => {
  let action = deletePost(1000);

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(4);
});
