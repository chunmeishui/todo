import { useState, useEffect } from "react";
import ItemTodo from "./ItemTodo";
import { FancyBorder } from "./FancyBorder";
import { AddToDo } from "./AddToDo";


const urlApi =
  "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw";
export function ListTodo() {
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [todoData, setTodoData] = useState([]);

  // get the data from api and set it as origin todoData
  useEffect(() => {
    fetch(urlApi)
      .then((response) => response.json())
      .then((data) => setTodoData(data));
  }, []);

  //delete todoItem
  const onDeleteTodo = (id) => {
    setTodoData((prev) => prev.filter((todo) => todo.id !== id));
  };

  const todoItem = todoData.map((item) => {
    return (
      <FancyBorder>
        <ItemTodo
          description={item.description}
          deadline={item.deadline}
          onDeleteTodo={onDeleteTodo}
          id={item.id}
          key={item.id}
        />{" "}
      </FancyBorder>
    );
  });

  return (
    <div className="text-container">
   
      <div>
        <label htmlFor="description"> Todo description </label>{" "}
        <input
          id="description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>{" "}
      </div>{" "}
      <div>
        <label htmlFor="deadline"> Deadline </label>{" "}
        <input
          id="deadline"
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        ></input>{" "}
      </div>{" "}
      <div className="todo-lists">
        <AddToDo
          description={description}
          deadline={deadline}
          todoData={todoData}
          setTodoData={setTodoData}
        />{" "}
        {todoData.length === 0 ? (
          <span> No items </span>
        ) : (
          <ul> {todoItem} </ul>
        )}
      </div>{" "}
    </div>
  );
}
