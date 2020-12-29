import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import { RootReducer } from "../types/States";
import Task from "../components/Task/Task";

const mapStateToProps = ({ listsReducer }: RootReducer) => ({
  lists: listsReducer.lists,
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  deleteTask: () => dispatch({ type: "task/delete" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Task);
