import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import ToDoItems from "./components/ToDoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const handleNewItems = (itemName, itemDueDate) => {
    console.log(`items added : Name: ${itemName} Date: ${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };
  const handleDeleteItem = (deletedItemName) => {
    const newTodoItems = todoItems.filter(
      (item) => item.name !== deletedItemName
    );
    setTodoItems(newTodoItems);
    console.log(`Delete item: ${deletedItemName}`);
  };
  return (
    <center className="todo-container">
      <AppName />
      <AddToDo onNewItem={handleNewItems} />
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <ToDoItems
        todoItemsProps={todoItems}
        onDeleteClick={handleDeleteItem}
      ></ToDoItems>
    </center>
  );
}
export default App;
