import styled from "styled-components";

/**
 * 任務輸入表單容器
 * 採用水平排列的彈性佈局
 */
export const Form = styled.form`
  display: flex;
  margin-bottom: 20px;
`;

/**
 * 任務文字輸入框
 * 自適應寬度，左側圓角設計
 */
export const Input = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
`;

/**
 * 時間輸入框
 * 無圓角設計，與文字輸入框和添加按鈕形成一體
 */
export const TimeInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 0;
`;

/**
 * 添加任務按鈕
 * 綠色背景，右側圓角設計，懸停時顯示較深色調
 */
export const AddButton = styled.button`
  padding: 10px 15px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #45a049;
  }
`;
