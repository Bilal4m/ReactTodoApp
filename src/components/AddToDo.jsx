import { useState } from "react";

function AddToDo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDueDate = (event) => {
    setDueDate(event.target.value);
  };
  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };
  return (
    <div className="container text-center">
      <div className="row my-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter to  do here"
            onChange={handleNameChange}
            value={todoName}
          />
        </div>
        <div className="col-4">
          <input type="date" onChange={handleDueDate} value={dueDate} />
        </div>
        <div className="col-1">
          <button
            type="button"
            className="btn btn-success my-btn"
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddToDo;
