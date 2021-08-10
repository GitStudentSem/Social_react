import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

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

// Исходная база данных для пользователей в диалогах
let dialogs = [
  { id: 1, name: "Сырный Творог" },
  { id: 2, name: "Олег Гусин" },
  { id: 3, name: "Гусь Олегович" },
  { id: 4, name: "Самолет Боингов" },
  { id: 5, name: "Азимбег Мамбусабутов" },
];

// Исходная база данных для каждого сообщения
let messages = [
  { id: 1, message: "Простое сообщение" },
  {
    id: 2,
    message: "asad",
  },
  { id: 3, message: "Подправил, теперь все выглядит около дела" },
];
ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
