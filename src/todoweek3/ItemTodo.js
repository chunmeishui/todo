import { useState } from "react";
import "./App.css";

// Item component
const ItemTodo = ({ description, deadline, onDeleteTodo, id }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedDescription, setUpdatedDescription] = useState(description);
  const [className, setClassName] = useState("unchecked");

  const deleteItem = () => onDeleteTodo(id);

  function changeClassName() {
    setClassName((prev) => {
      if (prev === "unchecked") {
        return "checked";
      } else {
        return "unchecked";
      }
    });
  }

  function enterEditMode() {
    setIsEditing(true);
  }

  function updateTodo(newDescription) {
    setUpdatedDescription(newDescription);
    setIsEditing(false);
  }

  const descriptionInfo = isEditing ? (
    <input
      type="text"
      value={updatedDescription}
      onChange={(event) => setUpdatedDescription(event.target.value)}
    />
  ) : (
    <label htmlFor="description" className={className}>
      {updatedDescription} | {deadline}
    </label>
  );

  const editButton = isEditing ? (
    <button onClick={() => updateTodo(updatedDescription)}>Update</button>
  ) : (
    <button onClick={enterEditMode}>Edit</button>
  );

  return (
    <li>
      {descriptionInfo}
      <input id="description" type="checkbox" onChange={changeClassName} />
      <button onClick={deleteItem}>delete</button>
      {editButton}
    </li>
  );
};

export default ItemTodo;
