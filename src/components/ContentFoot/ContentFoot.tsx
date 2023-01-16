import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSelected, clearSelected } from "../../redux/slice/ForToDoSlice";

const ContentFoot = () => {
  const ListsCount = useSelector(
    (state: { toDo: { toDo: [] } }) => state.toDo.toDo
  );

  const dispatch = useDispatch();

  let activeList = useSelector(
    (state: { toDo: { listActive: string } }) => state.toDo.listActive
  );

  return (
    <>
      <footer className="footer">
        <span className="todo-count">
          <strong>{ListsCount.length} </strong>
          items left
        </span>

        <ul className="filters">
          <li>
            <a
              href="#/"
              className={activeList === "all" ? "selected" : ""}
              onClick={(e) => {
                e.preventDefault();

                dispatch(changeSelected("all"));
              }}>
              All
            </a>
          </li>
          <li>
            <a
              href="#/"
              className={activeList === "active" ? "selected" : ""}
              onClick={(e) => {
                e.preventDefault();
                dispatch(changeSelected("active"));
              }}>
              Active
            </a>
          </li>
          <li>
            <a
              href="#/"
              className={activeList === "completed" ? "selected" : ""}
              onClick={(e) => {
                e.preventDefault();
                dispatch(changeSelected("completed"));
              }}>
              Completed
            </a>
          </li>
        </ul>

        <button
          className="clear-completed"
          onClick={() => {
            dispatch(clearSelected());
          }}>
          Clear completed
        </button>
      </footer>
    </>
  );
};

export default ContentFoot;
