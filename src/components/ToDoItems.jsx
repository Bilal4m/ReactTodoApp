import styles from "./ToDoItems.module.css";
import ToDoItem from "./ToDoItem";

const ToDoItems = ({ todoItemsProps }) => {
  return (
    <>
      {" "}
      <div className={styles.itemsContainer}>
        {todoItemsProps.map((item) => (
          <ToDoItem
            key={item}
            todoName={item.name}
            todoDate={item.dueDate}
          ></ToDoItem>
        ))}
      </div>
    </>
  );
};
export default ToDoItems;
