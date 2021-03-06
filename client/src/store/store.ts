import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import listsReducer from "../reducers/lists";
import listsMiddleware from "../middlewares/lists";
import tasksMiddleware from "../middlewares/tasks";

const store = configureStore({
  reducer: { listsReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listsMiddleware, tasksMiddleware),
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
