import styles from "./ToDoItems.module.css";
import ToDoItem from "./ToDoItem";

const ToDoItems = ({ todoItemsProps, onDeleteClick }) => {
  return (
    <>
      {" "}
      <div className={styles.itemsContainer}>
        {todoItemsProps.map((item) => (
          <ToDoItem
            key={item.name}
            todoName={item.name}
            todoDate={item.dueDate}
            onDeleteClick={onDeleteClick}
          ></ToDoItem>
        ))}
      </div>
    </>
  );
};
export default ToDoItems;
