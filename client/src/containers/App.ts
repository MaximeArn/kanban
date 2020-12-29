import { AnyAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { connect } from "react-redux";
import App from "../components/App/App";
import { RootReducer } from "../types/States";

const mapStateToProps = ({ listsReducer }: RootReducer) => ({
  lists: listsReducer.lists,
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  getLists: () => dispatch({ type: "list/getAll" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
