import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import { ListType } from "../../types/List";
import CreatTaskModal from "../../components/Modals/ListModal/ListModal";

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  createList: (listData: ListType) =>
    dispatch({ type: "list/create", payload: listData }),
});

export default connect(null, mapDispatchToProps)(CreatTaskModal);
