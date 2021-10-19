// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import TodoItem from './TodoItem';

const TodoList = ({todoList, onDelete, onToggle}) => {
  return (
    <div className="list-group">
      {todoList.map((todo, index) => (
        <TodoItem key={index} todo={todo} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </div>
  );
}

export default TodoList;
