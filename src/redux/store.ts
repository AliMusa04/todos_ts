import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { TodoSlice } from "./slice/ForToDoSlice";

export const store = configureStore({
  reducer: {
    toDo: TodoSlice.reducer,
  },
});

// export const useAppDispatch: () => typeof store.dispatch = useDispatch;
// export const useAppSelector: TypedUseSelectorHook<
//   ReturnType<typeof store.getState>
// > = useSelector;
