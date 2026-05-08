# FocusFlow Todo

質感高效待辦清單 - a polished productivity Todo app built with React.

## Overview

FocusFlow Todo is a portfolio-ready productivity mini app for planning, tracking, and completing focused daily tasks. It takes a familiar Todo workflow and presents it with a cleaner product direction: clear input, visible progress, persistent task data, and responsive interaction patterns.

The project is positioned as a frontend portfolio piece that demonstrates practical React state management, component-based UI structure, styled-components styling, and localStorage persistence in a compact, reviewable application.

## Project Positioning

FocusFlow Todo is designed as a polished frontend portfolio project rather than a basic classroom Todo exercise. It emphasizes focus, clarity, task progress, and maintainable React implementation within a small product surface.

## Features

- Add focused tasks with optional due time.
- Complete and uncomplete tasks.
- Edit task text and due time.
- Delete individual tasks.
- Filter tasks by all, active, and completed states.
- Clear completed tasks in one action.
- View task stats for total, completed, and remaining tasks.
- Persist tasks in `localStorage` across browser sessions.
- Use responsive UI patterns for desktop and mobile screens.

## UI / UX Highlights

- Product-style header with a current focus summary.
- Strong task entry area for the primary workflow.
- Clear visual distinction between active and completed tasks.
- Compact progress stats that make task status easy to scan.
- Focus, done, and empty states written as product copy rather than placeholder text.
- Accessible form labels, checkbox labels, and semantic controls where practical.
- Mobile-friendly layout that keeps task actions usable on narrow screens.

## Tech Stack

- React 19
- JavaScript / ES6+
- Create React App / `react-scripts`
- styled-components
- localStorage API
- React Testing Library

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

```bash
git clone https://github.com/Harry-0824/To_DoList_React.git
cd To_DoList_React
npm install
```

### Run Locally

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

### `npm start`

Runs the app in development mode.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Creates a production build in the `build/` folder.

### `npm run eject`

Exposes the Create React App build configuration. This is not part of the normal project workflow and should not be run without explicit approval.

## Project Structure

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

## Testing / Verification Notes

This issue is documentation-only, so no runtime test is required for the README update.

Recommended verification before review:

- Confirm only `README.md` changed.
- Confirm no files under `src/` changed.
- Confirm `package.json` and `package-lock.json` are unchanged.
- Confirm setup instructions use npm only.
- Confirm the project structure matches the current repository.

For application-level checks after code changes in future issues, use:

```bash
npm test
npm run build
```

## Future Improvements

- Add richer task organization, such as priority or categories.
- Add optional deadline indicators for overdue and upcoming tasks.
- Add keyboard shortcut refinements for faster task entry.
- Expand test coverage around editing, filtering, and localStorage persistence.
- Add deployment and portfolio integration in a separate focused issue.

## Portfolio Notes

FocusFlow Todo is designed to show how a small React app can be shaped into a polished product experience without unnecessary complexity. The project highlights:

- Practical React component composition.
- State-driven UI for task filters, editing, completion, and progress stats.
- Persistent client-side data with `localStorage`.
- Maintainable styling with styled-components.
- Clear documentation that explains product intent, implementation scope, and future direction.
