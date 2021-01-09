import { AnyAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { connect } from "react-redux";
import List from "../components/List/List";

const MapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  deleteList: (id: string) =>
    dispatch({ type: "list/delete", payload: { id: id } }),
});

export default connect(null, MapDispatchToProps)(List);
