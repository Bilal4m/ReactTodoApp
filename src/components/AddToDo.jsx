import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";

function AddToDo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDueDate = (event) => {
    setDueDate(event.target.value);
  };
  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };
  return (
    <div className="container text-center">
      <form className="row my-row" onSubmit={handleAddButtonClicked}>
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
          <button className="btn btn-success my-btn">
            <IoIosAddCircle />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddToDo;
