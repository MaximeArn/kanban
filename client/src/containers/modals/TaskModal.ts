import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import { TaskType } from "../../types/Tasks";
import CreatTaskModal from "../../components/Modals/TaskModal/TaskModal";

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  createTask: (listId: string, taskData: TaskType) =>
    dispatch({ type: "task/create", payload: { listId, taskData } }),

  editTask: (listId: string, taskData: TaskType) =>
    dispatch({ type: "task/edit", payload: { listId, taskData } }),
});

export default connect(null, mapDispatchToProps)(CreatTaskModal);
