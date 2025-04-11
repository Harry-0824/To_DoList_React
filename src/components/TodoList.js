import React from "react";
import TodoItem from "./TodoItem";
import { List, EmptyListMessage } from "../styles/TodoListStyles";

/**
 * TodoList 組件：顯示待辦事項列表
 * @param {array} todos - 待辦事項數組
 * @param {function} toggleTodo - 切換待辦事項完成狀態的函數
 * @param {function} deleteTodo - 刪除待辦事項的函數
 * @param {function} updateTodoTime - 更新待辦事項時間的函數
 * @param {function} updateTodoText - 更新待辦事項文字的函數
 */
function TodoList({
  todos,
  toggleTodo,
  deleteTodo,
  updateTodoTime,
  updateTodoText,
}) {
  // 當沒有待辦事項時顯示提示信息
  if (todos.length === 0) {
    return <EmptyListMessage>沒有待辦事項</EmptyListMessage>;
  }

  // 渲染待辦事項列表
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
