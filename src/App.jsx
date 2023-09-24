import "./style.css";
import { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [todoList, setTodoList] = useState([]);

  function onFormSubmit(e) {
    e.preventDefault();

    addTodo({ id: crypto.randomUUID(), title: item, isChecked: false });
  }

  function addTodo(toDoItem) {
    setTodoList((currentToDos) => {
      return [...currentToDos, { ...toDoItem }];
    });

    setItem("");
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
      <form className="new-item-form" onSubmit={onFormSubmit}>
        <label>Enter your work here</label>
        <input
          type="text"
          value={item}
          onChange={(val) => setItem(val.target.value)}
        />

        <button className="btn">Add Work</button>
      </form>
      <h1>Your Today Work List</h1>
      <ul className="list">
        {todoList.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.isChecked}
                  onChange={(e) => {
                    toggleToDo(todo.id, e.target.checked);
                  }}
                />
                {todo.title}
              </label>
              <button
                className="btn btn-danger"
                onClick={() => deleteToDoItem(todo.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
