import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import { RootReducer } from "../types/States";
import Task from "../components/Task/Task";

const mapStateToProps = ({ listsReducer }: RootReducer) => ({
  lists: listsReducer.lists,
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  deleteTask: (listId: string, taskId: string) =>
    dispatch({ type: "task/delete", payload: { listId, taskId } }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Task);
