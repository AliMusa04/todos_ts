import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addActive, removeFromList } from "../../redux/slice/ForToDoSlice";

const ToDo = () => {
  const lists = useSelector((state: { toDo: { toDo: [] } }) => state.toDo.toDo);

  const listActive = useSelector(
    (state: { toDo: { listActive: string } }) => state.toDo.listActive
  );

  const dispatch = useDispatch();

  // var changedLists = [];

  // switch (listActive) {
  //   case "all":
  //     changedLists = lists;
  //     break;
  //   case "active":
  //     changedLists = lists.filter(
  //       (item: { completed: boolean }) => item.completed === false
  //     );
  //     break;
  //   case "completed":
  //     changedLists = lists.filter(
  //       (item: { completed: boolean }) => item.completed === true
  //     );
  //     break;
  //   default:
  //     break;
  // }

  return (
    <>
      <ul className="todo-list">
        {lists &&
          lists.map(
            (item: { id: number; title: string; completed: boolean }) => {
              return (
                <li key={item.id} className={item.completed ? "completed" : ""}>
                  <div className="view">
                    <input
                      className="toggle"
                      type="checkbox"
                      onChange={() => {
                        dispatch(addActive(item.id));
                      }}
                    />
                    <label>{item.title}</label>
                    <button
                      className="destroy"
                      onClick={(e) => {
                        dispatch(removeFromList(item.id));
                      }}></button>
                  </div>
                </li>
              );
            }
          )}
        {/* <li className="completed">
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>Learn JavaScript</label>
            <button className="destroy"></button>
          </div>
        </li>

        <li>
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>Learn React</label>
            <button className="destroy"></button>
          </div>
        </li>

        <li>
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>Have a life!</label>
            <button className="destroy"></button>
          </div>
        </li> */}
      </ul>
    </>
  );
};

export default ToDo;
