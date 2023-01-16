import {
  CaseReducer,
  createSlice,
  nanoid,
  PayloadAction,
} from "@reduxjs/toolkit";
import { type } from "os";
import { title } from "process";

// type State = {
//   value: []
// }
// const increment: CaseReducer<State,PayloadAction<number>> = (state, action) => {
//   state.value += action.payload;
// }
let id = 4;
interface Item {
  id: number;
  title: string;
  completed: boolean | undefined;
}
interface ItemState {
  toDo: {
    id: number;
    title: string;
    completed: boolean | undefined;
  }[];
  listActive: string;
}

const initialState: ItemState = {
  toDo: [
    {
      id: 1,
      title: "HTML",
      completed: false,
    },
    {
      id: 2,
      title: "CSS",
      completed: false,
    },
    {
      id: 3,
      title: "JS",
      completed: false,
    },
  ],
  listActive: "all",
};

export const TodoSlice = createSlice({
  name: "todo",
  initialState,

  reducers: {
    addActive: (state, action) => {
      const id = action.payload;
      const item = state.toDo.find((item) => item.id === id);
      if (item !== undefined) {
        item.completed = !item?.completed;
      }
    },
    addToLists: (state, action) => {
      state.toDo.push(action.payload);
    },

    removeFromList: (state, action) => {
      let target = state.toDo.find((item) => item.id === action.payload);
      if (target !== undefined) {
        let indexTarget = state.toDo.indexOf(target);
        state.toDo.splice(indexTarget, 1);
      }
    },
    changeSelected: (state, action) => {
      state.listActive = action.payload;
    },
    clearSelected: (state) => {
      state.toDo = state.toDo.filter((item) => item.completed === false);
    },
  },
});

export const {
  addActive,
  addToLists,
  changeSelected,
  clearSelected,
  removeFromList,
} = TodoSlice.actions;
// PayloadAction<{ id: number }>
