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
      newMessageText: "",
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
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };

      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === "SEND-MESSAGE") {
      let newMessage = {
        id: 888,
        message: this._state.dialogsPage.newMessageText,
      };

      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
      this._state.dialogsPage.newMessageText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};
window.store = store;
export default store;
