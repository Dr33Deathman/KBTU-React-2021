const TodoItem = ({ todo, onDelete, onToggle }) => {
  return (
    <li className="list-group-item task" id={todo.id}>
      <input
        className="form-check-input me-2 strike-through"
        type="checkbox"
        defaultChecked={todo.checked}
        onChange={() => onToggle(todo.id)} />
      <span>{todo.text}</span>
      <img src="trash.svg" alt="Delete Todo" className="trash" onClick={() => onDelete(todo.id)} />
    </li>
  )
}

export default TodoItem;
