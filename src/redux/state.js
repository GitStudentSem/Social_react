const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
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
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = "";
      this._state.dialogsPage.messages.push({ id: 5, message: body });
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text };
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageBodyCreator = (body) => {
  return { type: UPDATE_NEW_MESSAGE_BODY, body: body };
};
window.store = store;
export default store;
