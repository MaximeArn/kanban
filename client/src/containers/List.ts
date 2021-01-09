import { AnyAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { connect } from "react-redux";
import List from "../components/List/List";

const MapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  deleteList: (listId: string) => dispatch({ type: "list/delete", listId }),
});

export default connect(null, MapDispatchToProps)(List);
