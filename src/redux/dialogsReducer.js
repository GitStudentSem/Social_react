const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

let initialState = {
  messages: [],

  dialogs: [
    { id: 1, name: "Сырн Творог" },
    { id: 2, name: "Олег Гусин" },
    { id: 3, name: "Гусь Олегович" },
    { id: 4, name: "Самолет Боингов" },
  ],
  newMessageBody: "",
};
export const dialogsReducer = (state = initialState, action) => {
  // Копирование объекта state
  switch (action.type) {
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: "",
        messages: [...state.messages, { id: 5, message: body }],
      };

    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body,
      };
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => {
  return { type: UPDATE_NEW_MESSAGE_BODY, body: body };
};

export default dialogsReducer;
