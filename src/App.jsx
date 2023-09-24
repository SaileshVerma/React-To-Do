import { ToDoFormComponent } from "./todo_component/ToDoFormComponent";
import { ToDoListComponent } from "./todo_component/ToDoListComponent";
import "./style.css";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);

  function addTodo(toDoItem) {
    setTodoList((currentToDos) => {
      return [...currentToDos, { ...toDoItem }];
    });
  }

  function deleteToDoItem(id) {
    setTodoList((currentToDos) => {
      return currentToDos.filter((item) => item.id != id);
    });
  }

  function toggleToDo(id, isChecked) {
    setTodoList((currentToDos) => {
      return currentToDos.map((item) => {
        if (item.id == id) {
          return { ...item, isChecked };
        }
      });
    });
  }

  return (
    <>
      <ToDoFormComponent addTodo={addTodo} />
      <h1>My Work List</h1>
      <ToDoListComponent
        todoList={todoList}
        toggle={toggleToDo}
        deleteItem={deleteToDoItem}
      />
    </>
  );
}

export default App;
