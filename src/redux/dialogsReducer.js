const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  messages: [],

  dialogs: [
    { id: 1, name: "Сырн Творог" },
    { id: 2, name: "Олег Гусин" },
    { id: 3, name: "Гусь Олегович" },
    { id: 4, name: "Самолет Боингов" },
  ],
};
export const dialogsReducer = (state = initialState, action) => {
  // Копирование объекта state
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 5, message: body }],
      };
    default:
      return state;
  }
};

export const sendMessage = (newMessageBody) => ({
  type: SEND_MESSAGE,
  newMessageBody,
});

export default dialogsReducer;
