import React from "react";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../HOC/withAuthRedirect";
import { sendMessage, updateNewMessageBody } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, {
  updateNewMessageBody,
  sendMessage,
})(AuthRedirectComponent);

export default DialogsContainer;
