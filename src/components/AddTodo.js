import { useState } from 'react';

const AddTodo = ({ onAdd }) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert('Please add a todo');
      return;
    }
    onAdd(text);
    setText('');
  }

  return (
    <>
      <div class="header row">
        <h1>Todo List</h1>
      </div>
      <form onSubmit={onSubmit} style={{ display: "flex" }}>
        <input
          className="form-control"
          type='text'
          placeholder='Add Todo'
          value={text}
          style={{ width: "80%" }}
          onChange={(e) => setText(e.target.value)}
        />
        <input type='submit' value='Save Todo' className='btn btn-primary btn-lg' />
      </form>
    </>
  )
}

export default AddTodo
