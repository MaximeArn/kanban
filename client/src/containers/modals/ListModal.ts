import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import { ListType } from "../../types/List";
import CreatListModal from "../../components/Modals/ListModal/ListModal";

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  createList: (listData: ListType) =>
    dispatch({ type: "list/create", payload: listData }),

  editList: (listData: ListType) =>
    dispatch({ type: "list/edit", payload: listData }),
});

export default connect(null, mapDispatchToProps)(CreatListModal);
