import React from "react";
import { connect } from "react-redux";
import { setDialogsAC } from "../../redux/sidebarReducer";
import Navbar from "./Navbar";

const mapStateToProps = (state) => {
  return {
    dialogs: state.sidebar.dialogs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUsers: (dialogs) => {
      dispatch(setDialogsAC(dialogs));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
