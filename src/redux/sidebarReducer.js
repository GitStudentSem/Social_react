const SET_DIALOGS = "SET-DIALOGS";
let initialState = {
  dialogs: [
    { id: 113, name: "Имельян Фамильев" },
    { id: 11, name: "Мышкат Юсупов" },
    { id: 12, name: "Суп Горохов" },
    { id: 41, name: "Name юзеров" },
    { id: 51, name: "Василис Обелисков" },
  ],
};

const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DIALOGS:
      return { ...state, dialogs: [...state.dialogs, ...action.dialogs] };
    default:
      return state;
  }
};
export const setDialogsAC = (dialogs) => ({ type: SET_DIALOGS, dialogs });

export default sidebarReducer;
