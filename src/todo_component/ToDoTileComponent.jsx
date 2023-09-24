export function ToDoTileComponent({ toggle, deleteItem, todo }) {
  let isStriked = todo.isChecked ? "strike" : "";
  return (
    <li>
      <label className={isStriked}>
        <input
          type="checkbox"
          checked={todo.isChecked}
          onChange={(e) => {
            toggle(todo.id, e.target.checked);
          }}
        />
        {todo.title}
      </label>
      <button className="btn btn-danger" onClick={() => deleteItem(todo.id)}>
        Remove
      </button>
    </li>
  );
}
