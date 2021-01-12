import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import Task from "../components/Task/Task";
import { TaskType } from "../types/Tasks";

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  deleteTask: (listId: string, taskId: string) =>
    dispatch({ type: "task/delete", payload: { listId, taskId } }),
  toggleStatus: (listId: string, taskData: TaskType) => {
    dispatch({ type: "task/edit", payload: { listId, taskData } });
  },
});

export default connect(null, mapDispatchToProps)(Task);
