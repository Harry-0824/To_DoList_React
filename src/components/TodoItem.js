import React, { useRef, useState } from "react";
import {
  Item,
  Checkbox,
  TodoContent,
  TodoMainRow,
  TodoText,
  StatusLabel,
  TodoMeta,
  TimeDisplay,
  ItemActions,
  TimeEditControls,
  TimeInput,
  TimeActionButton,
  EditButton,
  DeleteButton,
  EditMode,
  EditTextInput,
  EditTimeInput,
  SaveButton,
  CancelButton,
} from "../styles/TodoItemStyles";

function TodoItem({
  todo,
  toggleTodo,
  deleteTodo,
  updateTodoTime,
  updateTodoText,
}) {
  const [isEditingTime, setIsEditingTime] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const timeInputRef = useRef(null);
  const editTextRef = useRef(null);
  const editTimeRef = useRef(null);

  const handleTimeUpdate = () => {
    const nextTime = timeInputRef.current ? timeInputRef.current.value : "";
    updateTodoTime(todo.id, nextTime);
    setIsEditingTime(false);
  };

  const handleCancelEdit = () => {
    setIsEditingTime(false);
  };

  const handleEditStart = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    const nextText = editTextRef.current ? editTextRef.current.value : todo.text;
    const nextTime = editTimeRef.current ? editTimeRef.current.value : "";

    if (nextText.trim() !== "") {
      updateTodoText(todo.id, nextText);
      updateTodoTime(todo.id, nextTime);
      setIsEditing(false);
    }
  };

  const handleCancelFullEdit = () => {
    setIsEditing(false);
  };

  const dueTimeLabel = todo.dueTime
    ? new Date(todo.dueTime).toLocaleString()
    : "Set due time";

  return (
    <Item $completed={todo.completed}>
      {isEditing ? (
        <EditMode>
          <EditTextInput
            type="text"
            defaultValue={todo.text}
            ref={editTextRef}
            aria-label="Edit task text"
          />
          <EditTimeInput
            type="datetime-local"
            defaultValue={todo.dueTime || ""}
            ref={editTimeRef}
            aria-label="Edit due time"
          />
          <SaveButton type="button" onClick={handleSaveEdit}>
            Save
          </SaveButton>
          <CancelButton type="button" onClick={handleCancelFullEdit}>
            Cancel
          </CancelButton>
        </EditMode>
      ) : (
        <>
          <Checkbox
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
            aria-label={`Mark ${todo.text} as ${
              todo.completed ? "active" : "completed"
            }`}
          />

          <TodoContent>
            <TodoMainRow>
              <TodoText $completed={todo.completed}>{todo.text}</TodoText>
              <StatusLabel $completed={todo.completed}>
                {todo.completed ? "Done" : "Focus"}
              </StatusLabel>
            </TodoMainRow>

            <TodoMeta>
              {isEditingTime ? (
                <TimeEditControls>
                  <TimeInput
                    type="datetime-local"
                    defaultValue={todo.dueTime || ""}
                    ref={timeInputRef}
                    aria-label="Update due time"
                  />
                  <TimeActionButton type="button" onClick={handleTimeUpdate}>
                    Save time
                  </TimeActionButton>
                  <TimeActionButton type="button" onClick={handleCancelEdit}>
                    Cancel
                  </TimeActionButton>
                </TimeEditControls>
              ) : (
                <TimeDisplay type="button" onClick={() => setIsEditingTime(true)}>
                  {dueTimeLabel}
                </TimeDisplay>
              )}
            </TodoMeta>
          </TodoContent>

          <ItemActions>
            <EditButton type="button" onClick={handleEditStart}>
              Edit
            </EditButton>
            <DeleteButton type="button" onClick={() => deleteTodo(todo.id)}>
              Delete
            </DeleteButton>
          </ItemActions>
        </>
      )}
    </Item>
  );
}

export default TodoItem;
