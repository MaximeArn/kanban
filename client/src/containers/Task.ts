import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import Task from "../components/Task/Task";

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  deleteTask: (listId: string, taskId: string) =>
    dispatch({ type: "task/delete", payload: { listId, taskId } }),
});

export default connect(null, mapDispatchToProps)(Task);
