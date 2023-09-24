import { useState } from "react";

export function ToDoFormComponent({ addTodo }) {
  const [item, setItem] = useState("");

  function onFormSubmit(e) {
    e.preventDefault();

    if (item === "") {
      return;
    }
    addTodo({ id: crypto.randomUUID(), title: item, isChecked: false });
    setItem("");
  }
  return (
    <form className="new-item-form" onSubmit={onFormSubmit}>
      <label>Your Work:</label>
      <input
        type="text"
        value={item}
        placeholder="Try typing..."
        onChange={(val) => setItem(val.target.value)}
      />

      <button className="btn">Add Task</button>
    </form>
  );
}
