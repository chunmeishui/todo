import { Time } from "./Time";
import React from "react";
import { ListTodo } from "./ListTodo";
import "./App.css";

const MainTodo = () => {
  return (
    <div className="edit">
      {/* <h1>TodoList</h1> */}
      <Time />
      <ListTodo />
    </div>
  );
};
export default MainTodo;
