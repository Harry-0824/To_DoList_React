import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import {
  GlobalStyle,
  AppContainer,
  AppHeader,
  FilterButtonsContainer,
  FilterButton,
  ClearCompletedButton,
  TodoCount,
} from "./styles/AppStyles";

/**
 * App 組件：待辦事項應用程式的主要組件
 * 包含待辦事項的狀態管理、過濾功能和持久化存儲
 */
function App() {
  // 待辦事項狀態管理
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  // 過濾狀態：all(全部)、active(進行中)、completed(已完成)
  const [filter, setFilter] = useState("all");

  // 當待辦事項變更時，保存至本地存儲
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  /**
   * 添加新待辦事項
   * @param {string} text - 待辦事項文字內容
   * @param {string} dueTime - 待辦事項的截止時間
   */
  const addTodo = (text, dueTime) => {
    if (text.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text,
        completed: false,
        dueTime: dueTime,
      };
      setTodos([...todos, newTodo]);
    }
  };

  /**
   * 切換待辦事項的完成狀態
   * @param {number} id - 待辦事項的唯一ID
   */
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  /**
   * 刪除指定待辦事項
   * @param {number} id - 待辦事項的唯一ID
   */
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  /**
   * 更新待辦事項時間
   * @param {number} id - 待辦事項的唯一ID
   * @param {string} newTime - 新的截止時間
   */
  const updateTodoTime = (id, newTime) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, dueTime: newTime } : todo
      )
    );
  };

  /**
   * 更新待辦事項文字
   * @param {number} id - 待辦事項的唯一ID
   * @param {string} newText - 新的待辦事項文字
   */
  const updateTodoText = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  /**
   * 根據過濾條件篩選待辦事項
   */
  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  /**
   * 清除所有已完成的待辦事項
   */
  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <AppHeader>待辦事項清單</AppHeader>
        {/* 添加待辦事項表單 */}
        <TodoForm addTodo={addTodo} />

        {/* 過濾按鈕組 */}
        <FilterButtonsContainer>
          <FilterButton
            active={filter === "all"}
            onClick={() => setFilter("all")}
          >
            全部
          </FilterButton>
          <FilterButton
            active={filter === "active"}
            onClick={() => setFilter("active")}
          >
            進行中
          </FilterButton>
          <FilterButton
            active={filter === "completed"}
            onClick={() => setFilter("completed")}
          >
            已完成
          </FilterButton>
        </FilterButtonsContainer>

        {/* 待辦事項列表 */}
        <TodoList
          todos={filteredTodos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          updateTodoTime={updateTodoTime}
          updateTodoText={updateTodoText}
        />

        {/* 僅在有已完成項目時顯示清除按鈕 */}
        {todos.some((todo) => todo.completed) && (
          <ClearCompletedButton onClick={clearCompleted}>
            清除已完成項目
          </ClearCompletedButton>
        )}

        {/* 顯示未完成項目數量 */}
        <TodoCount>
          剩餘 {todos.filter((todo) => !todo.completed).length} 項未完成
        </TodoCount>
      </AppContainer>
    </>
  );
}

export default App;
