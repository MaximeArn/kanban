import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import { TaskType } from "../../types/Tasks";
import CreatTaskModal from "../../components/Modals/CreateTaskModal/CreateTaskModal";

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  createTask: (listId: string, taskData: TaskType) =>
    dispatch({ type: "task/create", payload: { listId, taskData } }),
});

export default connect(null, mapDispatchToProps)(CreatTaskModal);
