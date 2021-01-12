import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import Task from "../components/Task/Task";

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  deleteTask: (listId: string, taskId: string) =>
    dispatch({ type: "task/delete", payload: { listId, taskId } }),
  toggleStatus: (listId: string, status: boolean) => {
    const taskData = { done: status };
    dispatch({ type: "task/edit", payload: { listId, taskData } });
  },
});

export default connect(null, mapDispatchToProps)(Task);
