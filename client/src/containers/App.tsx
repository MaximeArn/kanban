import { AnyAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { connect } from "react-redux";
import App from "../components/App/App";

const mapStateToProps = (state: any) => {};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  getLists: () => dispatch({ type: "getLists" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
