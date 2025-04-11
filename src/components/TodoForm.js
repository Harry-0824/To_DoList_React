import React, { useState } from "react";
import { Form, Input, TimeInput, AddButton } from "../styles/TodoFormStyles";

/**
 * TodoForm 組件：用於添加新待辦事項的表單
 * @param {function} addTodo - 添加待辦事項的函數，由父組件傳入
 */
function TodoForm({ addTodo }) {
  // 輸入框的文字狀態
  const [text, setText] = useState("");

  // 創建今天日期的 ISO 字符串格式 (YYYY-MM-DDThh:mm)
  const today = new Date();
  const formattedDate = today.toISOString().slice(0, 16);

  // 設置默認時間為今天
  const [dueTime, setDueTime] = useState(formattedDate);

  /**
   * 處理表單提交事件
   * @param {Event} e - 表單提交事件對象
   */
  const handleSubmit = (e) => {
    e.preventDefault(); // 阻止表單默認提交行為
    addTodo(text, dueTime); // 調用父組件傳入的添加函數，並傳入時間
    setText(""); // 重置輸入框
    setDueTime(new Date().toISOString().slice(0, 16)); // 重置為當前時間
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="新增待辦事項..."
        required
      />
      <TimeInput
        type="datetime-local"
        value={dueTime}
        onChange={(e) => setDueTime(e.target.value)}
      />
      <AddButton type="submit">新增</AddButton>
    </Form>
  );
}

export default TodoForm;
