import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../HOC/withAuthRedirect";
import { sendMessage, updateNewMessageBody } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

export default compose(
  connect(mapStateToProps, {
    updateNewMessageBody,
    sendMessage,
  }),
  withAuthRedirect
)(Dialogs);
