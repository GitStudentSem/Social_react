let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Первый комментарий", likesCount: 12 },
      { id: 2, message: "Второй комментарий", likesCount: 0 },
      {
        id: 3,
        message:
          "Далеко-далеко, за словесными горами в стране гласных и согласных живут рыбные тексты",
        likesCount: 999,
      },
      { id: 4, message: "Какая-то запись на стене профиля", likesCount: 1177 },
    ],
  },

  dialogsPage: {
    messages: [
      { id: 1, message: "Простое сообщение" },
      {
        id: 2,
        message: "asad",
      },
      { id: 3, message: "Подправил, теперь все выглядит около дела" },
    ],

    dialogs: [
      { id: 1, name: "Сырный Творог" },
      { id: 2, name: "Олег Гусин" },
      { id: 3, name: "Гусь Олегович" },
      { id: 4, name: "Самолет Боингов" },
      { id: 5, name: "Азимбег Мамбусабутов" },
    ],
  },
  sidebar: {
    dialogs: [
      { id: 113, name: "фывцфв" },
      { id: 11, name: "asdas" },
      { id: 12, name: "asdwad" },
      { id: 41, name: "Сcsce" },
      { id: 51, name: "Азимб" },
    ],
  },
};
export default state;
