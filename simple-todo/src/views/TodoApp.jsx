import React, { useEffect } from "react";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";

//import { v4 as uuid } from "uuid";
import useTodoState from "../components/Hooks/useTodoState";

function TodoApp() {
  const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]");

    const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(initialTodos);

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

//   const addTodo = (newTodoText) => {
//     if (todos) {
//       setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
//     } else {
//       setTodos([{ id: uuid(), task: newTodoText, completed: false }]);
//     }
//   };
//   const removeTodo = (todoId) => {
//     let updatedTodos = todos.filter((todo) => todo.id !== todoId);

//     setTodos(updatedTodos);
//   };
//   const toggleTodo = (todoId) => {
//     let updatedTodos = todos.map((todo) =>
//       todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
//     );
//     setTodos(updatedTodos);
//   };

//   const editTodo = (todoId, updatedTask) => {
//     let updatedTodos = todos.map((todo) =>
//       todo.id === todoId ? { ...todo, task: updatedTask } : todo
//     );
//     setTodos(updatedTodos);
//   };

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">TODOS</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={8}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;