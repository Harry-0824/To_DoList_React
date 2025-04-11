import React from "react";
import ReactDOM from "react-dom/client";
// 移除舊的 CSS 引入
// import './index.css';
import App from "./App";
// 引入全局樣式
import GlobalStyles from "./styles/GlobalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* 在應用外層添加 GlobalStyles 組件 */}
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
