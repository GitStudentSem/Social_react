import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
  _state: {
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
        {
          id: 4,
          message: "Какая-то запись на стене профиля",
          likesCount: 1177,
        },
      ],
      newPostText: "",
    },

    dialogsPage: {
      messages: [],

      dialogs: [
        { id: 1, name: "Сырн Творог" },
        { id: 2, name: "Олег Гусин" },
        { id: 3, name: "Гусь Олегович" },
        { id: 4, name: "Самолет Боингов" },
        { id: 5, name: "Азимбег Мамбусабутов" },
      ],
      newMessageBody: "",
    },
    sidebar: {
      dialogs: [
        { id: 113, name: "Имельян Фамильев" },
        { id: 11, name: "Мышкат Юсупов" },
        { id: 12, name: "Суп Горохов" },
        { id: 41, name: "Name юзеров" },
        { id: 51, name: "Василис Обелисков" },
      ],
    },
  },

  _callSubscriber() {
    console.log("state is change");
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
