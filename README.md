# FocusFlow Todo

質感高效待辦清單 - 使用 React 打造的精緻生產力 Todo 應用。

## 專案概述

FocusFlow Todo 是一個作品集導向的生產力小型應用，協助使用者規劃、追蹤並完成每日聚焦任務。它保留 Todo 應用直覺的操作流程，並以更完整的產品呈現方式強化任務輸入、進度摘要、狀態切換、資料保存與響應式體驗。

這個專案展示了 React 狀態管理、元件化 UI 結構、styled-components 樣式拆分，以及 `localStorage` 持久化資料等前端實作能力，適合作為履歷或作品集中的精簡型產品案例。

## 專案定位

FocusFlow Todo 不是單純的課堂練習 Todo list，而是以作品集展示為目標的前端產品練習。專案重點放在清楚的任務流程、安靜且聚焦的 UI、可掃描的進度資訊，以及可維護的 React 實作結構。

## 功能特色

- 新增聚焦任務，並可設定任務到期時間。
- 將任務標記為完成或切回未完成。
- 編輯任務文字與到期時間。
- 刪除單一任務。
- 依照全部、進行中、已完成狀態篩選任務。
- 一次清除所有已完成任務。
- 顯示任務總數、已完成數量與剩餘數量。
- 使用 `localStorage` 保存任務，重新整理後仍保留資料。
- 支援桌面與行動裝置的響應式版面。

## UI / UX 亮點

- 以產品感標題區呈現目前任務焦點。
- 強化任務輸入區，讓新增任務成為主要操作。
- 清楚區分進行中與已完成任務狀態。
- 使用精簡統計卡片呈現任務進度。
- 為空狀態、完成狀態與聚焦狀態撰寫更像產品的文案。
- 表單、核取方塊與按鈕保留可理解的標籤與語意。
- 行動版維持任務操作可讀性與可點擊性。

## 技術棧

- React 19
- JavaScript / ES6+
- Create React App / `react-scripts`
- styled-components
- localStorage API
- React Testing Library

## 開始使用

### 環境需求

- Node.js
- npm

### 安裝

```bash
git clone https://github.com/Harry-0824/To_DoList_React.git
cd To_DoList_React
npm install
```

### 本機執行

```bash
npm start
```

開啟瀏覽器並前往 [http://localhost:3000](http://localhost:3000)。

## 可用指令

### `npm start`

啟動開發模式。

### `npm test`

以互動 watch 模式啟動測試。

### `npm run build`

建立 production build，輸出到 `build/` 資料夾。

### `npm run eject`

展開 Create React App 的建置設定。這不是本專案的一般工作流程，除非有明確需求，不建議執行。

## 專案結構

```text
To_DoList_React/
|-- public/
|   |-- index.html
|   |-- manifest.json
|   `-- robots.txt
|-- src/
|   |-- components/
|   |   |-- TodoForm.js
|   |   |-- TodoItem.js
|   |   `-- TodoList.js
|   |-- styles/
|   |   |-- AppStyles.js
|   |   |-- GlobalStyles.js
|   |   |-- TodoFormStyles.js
|   |   |-- TodoItemStyles.js
|   |   `-- TodoListStyles.js
|   |-- App.js
|   |-- App.test.js
|   `-- index.js
|-- AGENTS.md
|-- DESIGN.md
|-- package-lock.json
|-- package.json
`-- README.md
```

## 測試與驗證

這次 README 更新屬於 docs-only change，因此不需要執行 runtime test。

建議在 review 前確認：

- 只有 `README.md` 被修改。
- 沒有修改 `src/` 目錄下的任何檔案。
- `package.json` 與 `package-lock.json` 沒有變更。
- 安裝與執行說明只使用 npm。
- 專案結構與目前 repository 內容一致。

若未來 issue 涉及應用程式程式碼變更，可使用：

```bash
npm test
npm run build
```

## 未來改進方向

- 增加任務優先級或分類功能。
- 加入到期、即將到期或逾期的視覺提示。
- 補強鍵盤操作，提升快速新增與編輯任務的效率。
- 擴充編輯、篩選與 `localStorage` persistence 的測試覆蓋。
- 在獨立 issue 中處理部署與作品集整合。

## 作品集說明

FocusFlow Todo 展示如何把一個小型 React Todo app 打磨成更完整的產品體驗，而不引入不必要的複雜度。這個專案適合用來說明：

- React 元件拆分與組合能力。
- 以狀態驅動篩選、編輯、完成狀態與進度統計。
- 使用 `localStorage` 實作瀏覽器端資料保存。
- 使用 styled-components 管理可維護的樣式結構。
- 以清楚文件說明產品定位、實作範圍與後續方向。
