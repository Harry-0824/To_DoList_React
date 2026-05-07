import React, { useState } from "react";
import {
  Form,
  FieldGroup,
  FieldLabel,
  Input,
  TimeInput,
  AddButton,
} from "../styles/TodoFormStyles";

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");
  const [dueTime, setDueTime] = useState(new Date().toISOString().slice(0, 16));

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text, dueTime);
    setText("");
    setDueTime(new Date().toISOString().slice(0, 16));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FieldGroup>
        <FieldLabel htmlFor="todo-text">Task</FieldLabel>
        <Input
          id="todo-text"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a focused task..."
          required
        />
      </FieldGroup>

      <FieldGroup $compact>
        <FieldLabel htmlFor="todo-due-time">Due time</FieldLabel>
        <TimeInput
          id="todo-due-time"
          type="datetime-local"
          value={dueTime}
          onChange={(e) => setDueTime(e.target.value)}
        />
      </FieldGroup>

      <AddButton type="submit">Add task</AddButton>
    </Form>
  );
}

export default TodoForm;
