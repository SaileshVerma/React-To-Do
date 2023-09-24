import { ToDoTileComponent } from "./ToDoTileComponent";

export function ToDoListComponent({ todoList, toggle, deleteItem }) {
  return (
    <ul className="list">
      {todoList.map((todo) => {
        return (
          <ToDoTileComponent
            key={todo.id}
            toggle={toggle}
            deleteItem={deleteItem}
            todo={todo}
          />
        );
      })}
    </ul>
  );
}
