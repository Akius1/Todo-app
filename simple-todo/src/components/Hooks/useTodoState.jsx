import { useState } from "react";
import { v4 as uuid } from "uuid";

function useTodoState(initialTodos) {
  const [todos, setTodos] = useState(initialTodos);
  return {
    todos,
    addTodo: (newTodoText) => {
    //   if (todos) {
        setTodos([
          ...todos,
          { id: uuid(), task: newTodoText, completed: false },
        ]);
    //   } else {
    //     setTodos([{ id: uuid(), task: newTodoText, completed: false }]);
    //   }
    },
    removeTodo: (todoId) => {
      let updatedTodos = todos.filter((todo) => todo.id !== todoId);

      setTodos(updatedTodos);
    },

    toggleTodo: (todoId) => {
      let updatedTodos = todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos(updatedTodos);
    },

    editTodo: (todoId, updatedTask) => {
      let updatedTodos = todos.map((todo) =>
        todo.id === todoId ? { ...todo, task: updatedTask } : todo
      );
      setTodos(updatedTodos);
    },
  };
}

export default useTodoState;
