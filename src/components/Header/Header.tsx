import { nanoid } from "@reduxjs/toolkit";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToLists } from "../../redux/slice/ForToDoSlice";

const Header = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const getInput = (e: any | null) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }

    if (inputRef.current !== null) {
      dispatch(
        addToLists({
          id: nanoid(),
          title: inputRef.current.value,
          completed: false,
        })
      );
    }
  };
  // const toDoValue = useSelector(
  //   (state: { toDo: { value: [] } }) => state.toDo.value
  // );

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={getInput}>
        <input
          ref={inputRef}
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
        />
      </form>
    </header>
  );
};

export default Header;
