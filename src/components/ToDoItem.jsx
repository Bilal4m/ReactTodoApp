import { MdDeleteForever } from "react-icons/md";

function ToDoItem({ todoName, todoDate, onDeleteClick }) {
  return (
    <div className="container ">
      <div className="row my-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger my-btn"
            onClick={() => onDeleteClick(todoName)}
          >
            <MdDeleteForever />
          </button>
        </div>
      </div>
    </div>
  );
}
export default ToDoItem;
