import React from "react";
import { connect } from "react-redux";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let mapDispathToProps = (dispatch) => {
  return {
    updateNewMessageBodyCreator: () => {
      dispatch(sendMessageCreator());
    },
    sendMessageCreator: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
  };
};
const DialogsContainer = connect(mapStateToProps, mapDispathToProps)(Dialogs);

export default DialogsContainer;
