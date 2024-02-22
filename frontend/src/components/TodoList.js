import React, { useState } from 'react';

const TodoList = ({ todos }) => {
  const [todoList, setTodoList] = useState(todos);

  const handleToggleCompletion = (id) => {
    setTodoList((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleToggleAll = () => {
    setTodoList((prevTodos) =>
      prevTodos.map((todo) => ({ ...todo, completed: !todoList.every((t) => t.completed) }))
    );
  };

  return (
    <div>
      <h2>Todo List</h2>
      <button onClick={handleToggleAll}>Toggle All</button>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleCompletion(todo.id)}
              />
              {todo.title}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;