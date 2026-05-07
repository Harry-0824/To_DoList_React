import React from "react";
import TodoItem from "./TodoItem";
import {
  List,
  EmptyListMessage,
  EmptyStateIcon,
  EmptyStateTitle,
  EmptyStateText,
} from "../styles/TodoListStyles";

const emptyStateCopy = {
  all: {
    title: "No tasks yet",
    text: "Add one focused task to start shaping the day.",
  },
  active: {
    title: "No active tasks",
    text: "Everything active is complete. Switch filters or add a new task.",
  },
  completed: {
    title: "No completed tasks",
    text: "Completed work will collect here as you check tasks off.",
  },
};

function TodoList({
  todos,
  filter,
  toggleTodo,
  deleteTodo,
  updateTodoTime,
  updateTodoText,
}) {
  if (todos.length === 0) {
    const copy = emptyStateCopy[filter] || emptyStateCopy.all;

    return (
      <EmptyListMessage>
        <EmptyStateIcon aria-hidden="true">✓</EmptyStateIcon>
        <EmptyStateTitle>{copy.title}</EmptyStateTitle>
        <EmptyStateText>{copy.text}</EmptyStateText>
      </EmptyListMessage>
    );
  }

  return (
    <List>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          updateTodoTime={updateTodoTime}
          updateTodoText={updateTodoText}
        />
      ))}
    </List>
  );
}

export default TodoList;
