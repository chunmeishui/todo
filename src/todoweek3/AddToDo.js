export const AddToDo = ({ description, deadline, todoData, setTodoData }) => {
    function addTodo(){
const id = todoData.length + 1;
setTodoData((prev) => [...prev, { id, description, deadline }]);
    }
  
  return (
    <>
      <button onClick={addTodo}> Add todo </button>
    </>
  );
};
