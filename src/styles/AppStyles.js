import styled, { createGlobalStyle, keyframes } from "styled-components";

/**
 * 全局樣式設定
 * 重置頁面邊距和設置默認字體
 */
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Arial", sans-serif;
  }
`;

/**
 * 應用主容器
 * 設置最大寬度並水平居中
 */
export const AppContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: "Arial", sans-serif;
`;

/**
 * 應用標題
 * 水平居中，設置顏色和下邊距
 */
export const AppHeader = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`;

/**
 * 過濾按鈕容器
 * 使按鈕水平居中排列
 */
export const FilterButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

/**
 * 過濾按鈕
 * 基於active屬性動態調整顯示樣式
 */
export const FilterButton = styled.button`
  margin: 0 5px;
  padding: 8px 12px;
  background-color: ${(props) => (props.active ? "#4caf50" : "#f1f1f1")};
  color: ${(props) => (props.active ? "white" : "inherit")};
  border: 1px solid ${(props) => (props.active ? "#4caf50" : "#ddd")};
  border-radius: 4px;
  cursor: pointer;
`;

/**
 * 清除已完成任務按鈕
 * 橙色背景，水平居中顯示
 */
export const ClearCompletedButton = styled.button`
  display: block;
  margin: 20px auto;
  padding: 8px 12px;
  background-color: #ff9800;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #f57c00;
  }
`;

/**
 * 任務計數顯示區域
 * 水平居中，使用灰色文字展示
 */
export const TodoCount = styled.div`
  text-align: center;
  margin-top: 20px;
  color: #666;
`;

/**
 * 旋轉動畫定義
 * 用於應用標誌的旋轉效果
 */
const logoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

/**
 * 應用標誌
 * 具有無限旋轉動畫效果
 */
export const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: ${logoSpin} infinite 20s linear;
`;
