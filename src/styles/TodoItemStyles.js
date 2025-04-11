import styled from "styled-components";

/**
 * 待辦事項項目容器
 * 使用彈性佈局排列內容，已完成的項目透明度降低
 */
export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;
  opacity: ${(props) => (props.completed ? 0.6 : 1)};
`;

/**
 * 完成狀態勾選框
 * 用於標記任務完成狀態
 */
export const Checkbox = styled.input`
  margin-right: 10px;
  cursor: pointer;
`;

/**
 * 待辦事項文字區域
 * 佔用可用空間，已完成項目顯示刪除線和灰色文字
 */
export const TodoText = styled.span`
  flex: 1;
  font-size: 16px;
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  color: ${(props) => (props.completed ? "#888" : "inherit")};
`;

/**
 * 時間顯示區域
 * 可點擊進入時間編輯模式
 */
export const TimeDisplay = styled.div`
  cursor: pointer;
  margin-right: 10px;
  font-size: 14px;
  color: #666;
`;

/**
 * 時間編輯控制區域
 * 包含時間輸入框和相關操作按鈕
 */
export const TimeEditControls = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

/**
 * 時間輸入框
 * 用於編輯任務的時間
 */
export const TimeInput = styled.input`
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 5px;
`;

/**
 * 編輯按鈕
 * 綠色背景，用於切換到編輯模式
 */
export const EditButton = styled.button`
  padding: 5px 10px;
  background-color: #34d326;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 5px;
`;

/**
 * 刪除按鈕
 * 紅色背景，用於刪除任務
 */
export const DeleteButton = styled.button`
  padding: 5px 10px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #d32f2f;
  }
`;

/**
 * 編輯模式容器
 * 活動時替換常規顯示模式
 */
export const EditMode = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

/**
 * 文字編輯輸入框
 * 用於編輯任務內容
 */
export const EditTextInput = styled.input`
  flex: 1;
  padding: 8px;
  margin-right: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

/**
 * 時間編輯輸入框
 * 編輯模式下的時間輸入控件
 */
export const EditTimeInput = styled.input`
  padding: 8px;
  margin-right: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

/**
 * 保存按鈕
 * 綠色背景，用於保存編輯更改
 */
export const SaveButton = styled.button`
  padding: 5px 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 5px;
`;

/**
 * 取消按鈕
 * 紅色背景，用於取消編輯
 */
export const CancelButton = styled.button`
  padding: 5px 10px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
