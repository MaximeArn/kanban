import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import listsReducer from "../reducers/lists";

const store = configureStore({
  reducer: { listsReducer },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
