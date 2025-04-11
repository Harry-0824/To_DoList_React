import React, { useState } from "react";
import {
  Item,
  Checkbox,
  TodoText,
  TimeDisplay,
  TimeEditControls,
  TimeInput,
  EditButton,
  DeleteButton,
  EditMode,
  EditTextInput,
  EditTimeInput,
  SaveButton,
  CancelButton,
} from "../styles/TodoItemStyles";

/**
 * TodoItem 組件：顯示單個待辦事項
 * @param {object} todo - 待辦事項對象，包含id、text、completed和dueTime屬性
 * @param {function} toggleTodo - 切換待辦事項完成狀態的函數
 * @param {function} deleteTodo - 刪除待辦事項的函數
 * @param {function} updateTodoTime - 更新待辦事項時間的函數
 * @param {function} updateTodoText - 更新待辦事項文字的函數
 */
function TodoItem({
  todo,
  toggleTodo,
  deleteTodo,
  updateTodoTime,
  updateTodoText,
}) {
  const [isEditingTime, setIsEditingTime] = useState(false);
  const [tempTime, setTempTime] = useState(todo.dueTime || "");
  const [isEditing, setIsEditing] = useState(false);
  const [tempText, setTempText] = useState(todo.text);

  // 處理時間編輯完成
  const handleTimeUpdate = () => {
    updateTodoTime(todo.id, tempTime);
    setIsEditingTime(false);
  };

  // 處理取消編輯
  const handleCancelEdit = () => {
    setTempTime(todo.dueTime || "");
    setIsEditingTime(false);
  };

  // 開始編輯任務
  const handleEditStart = () => {
    setIsEditing(true);
    setTempText(todo.text);
    setTempTime(todo.dueTime || "");
  };

  // 保存編輯結果
  const handleSaveEdit = () => {
    if (tempText.trim() !== "") {
      updateTodoText(todo.id, tempText);
      updateTodoTime(todo.id, tempTime);
      setIsEditing(false);
    }
  };

  // 取消編輯
  const handleCancelFullEdit = () => {
    setTempText(todo.text);
    setTempTime(todo.dueTime || "");
    setIsEditing(false);
  };

  return (
    <Item completed={todo.completed}>
      {isEditing ? (
        <EditMode>
          <EditTextInput
            type="text"
            value={tempText}
            onChange={(e) => setTempText(e.target.value)}
          />
          <EditTimeInput
            type="datetime-local"
            value={tempTime}
            onChange={(e) => setTempTime(e.target.value)}
          />
          <SaveButton onClick={handleSaveEdit}>保存</SaveButton>
          <CancelButton onClick={handleCancelFullEdit}>取消</CancelButton>
        </EditMode>
      ) : (
        <>
          {/* 待辦事項完成狀態勾選框 */}
          <Checkbox
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />

          {/* 待辦事項文字內容 */}
          <TodoText completed={todo.completed}>{todo.text}</TodoText>

          {/* 待辦事項時間顯示與編輯 */}
          <div>
            {isEditingTime ? (
              <TimeEditControls>
                <TimeInput
                  type="datetime-local"
                  value={tempTime}
                  onChange={(e) => setTempTime(e.target.value)}
                />
                <button onClick={handleTimeUpdate}>確認</button>
                <button onClick={handleCancelEdit}>取消</button>
              </TimeEditControls>
            ) : (
              <TimeDisplay onClick={() => setIsEditingTime(true)}>
                {todo.dueTime
                  ? new Date(todo.dueTime).toLocaleString()
                  : "添加時間"}
              </TimeDisplay>
            )}
          </div>

          {/* 編輯按鈕 */}
          <EditButton onClick={handleEditStart}>編輯</EditButton>

          {/* 刪除按鈕 */}
          <DeleteButton onClick={() => deleteTodo(todo.id)}>刪除</DeleteButton>
        </>
      )}
    </Item>
  );
}

export default TodoItem;
