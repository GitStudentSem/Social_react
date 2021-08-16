import React from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar";

const mapStateToProps = (state) => {
  return {
    dialogs: state.sidebar.dialogs,
  };
};

export default connect(mapStateToProps)(Navbar);
