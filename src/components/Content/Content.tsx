import React from "react";
import ToDo from "../ToDo/ToDo";

const Content = () => {
  return (
    <>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>

        <ToDo />
      </section>
    </>
  );
};

export default Content;
