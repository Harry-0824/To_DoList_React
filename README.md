# To-Do List React 應用程式

這是一個使用 React 開發的待辦事項清單應用程式，讓使用者能夠輕鬆管理日常任務。

## 功能特色

- 新增待辦事項：輸入任務內容並加入到清單中
- 完成待辦事項：標記已完成的任務
- 刪除待辦事項：移除不需要的任務
- 編輯待辦事項：修改已存在的任務內容
- 任務分類：依照完成狀態過濾任務
- 本地儲存：使用 localStorage 保存任務，重新整理頁面不會遺失資料

## 使用技術

- React.js
- JavaScript/ES6+
- styled-components
- LocalStorage API

## 安裝與使用

### 必要條件

- Node.js (建議版本 14.x 或更高)
- npm 或 yarn

### 安裝步驟

1. 複製此專案：

   ```
   git clone [repository-url]
   cd to-dolist-react
   ```

2. 安裝相依套件：

   ```
   npm install
   ```

   或

   ```
   yarn install
   ```

3. 啟動開發伺服器：

   ```
   npm start
   ```

   或

   ```
   yarn start
   ```

4. 在瀏覽器中開啟 [http://localhost:3000](http://localhost:3000) 使用應用程式

## 使用指南

1. 在輸入框中輸入任務內容，按下「新增」按鈕或按 Enter 鍵添加任務
2. 點擊任務前的勾選框可標記任務為已完成
3. 點擊任務旁的「編輯」按鈕可修改任務內容
4. 點擊任務旁的「刪除」按鈕可移除任務
5. 使用上方的過濾選項可查看全部、已完成或未完成的任務

## 專案結構

```
to-dolist-react/
├── public/
├── src/
│   ├── components/
│   │   ├── TodoForm.js      # 任務輸入表單
│   │   ├── TodoItem.js      # 單一任務項目
│   │   ├── TodoList.js      # 任務清單容器
│   │   └── FilterOptions.js # 過濾選項
│   ├── App.js               # 主應用程式元件
│   ├── App.css              # 主要樣式
│   └── index.js             # 應用程式入口點
└── README.md
```

## 可能的未來擴展功能

- 任務優先級設定
- 截止日期提醒
- 支援多個不同清單
- 雲端同步功能
- 使用者帳號系統

## 貢獻指南

歡迎提交 Pull Request 或建立 Issue 來改進此專案！

## 授權

此專案採用 MIT 授權 - 詳見 LICENSE 檔案

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
