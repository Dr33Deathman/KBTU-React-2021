import { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

const App = () => {
  // Fetch TodoList
  const fetchTodoList = () => {
    return JSON.parse(localStorage.getItem('todoList')) || [];
  };

  const [todoList, setTodoList] = useState(fetchTodoList());

  const saveCache = () => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  };

  // Add Todo
  const addTodo = (todo) => {
    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      checked: false
    };
    setTodoList([...todoList, newTodo]);
  };

  // Delete Todo
  const deleteTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  // Toggle Checked
  const toggleTodo = (id) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  saveCache();
  return (
    <>
      <div className="nav">
        <p>TODO List</p>
      </div>
      <div className="container-md" style={{ marginTop: '100px'}}>
        <AddTodo onAdd={addTodo} />
        <TodoList
          todoList={todoList}
          onDelete={deleteTodo}
          onToggle={toggleTodo}
        />
      </div>
    </>
  )
}

export default App;




