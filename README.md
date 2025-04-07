# 📝 Redux Saga Todo App

A simple but scalable Todo application built with **React**, **Redux**, and **Redux-Saga**.  
This project is part of my senior developer learning challenge — focused on deepening state management, side effects, and test-driven development.

---

## 🚀 Features

- ✅ Add, toggle, and delete todos
- ✅ State management with Redux
- ✅ Async fetching with Redux-Saga
- ✅ Middleware to sync state to localStorage
- ✅ Unit-tested reducers and sagas
- ✅ Component testing setup with React Testing Library

---

## 🛠 Tech Stack

- **React**
- **Redux**
- **Redux-Saga**
- **TypeScript**
- **Jest** + **React Testing Library**
- **localStorage** (with custom middleware)

---

## 📂 Folder Structure
src/ ├── features/ │ └── todo-app/ │ ├── components/ # TodoList, AddTodo, etc. │ ├── store/ # actions, reducers, sagas, middleware │ └── types/ # (optional) shared types ├── utils/ # reusable helpers like getOrFetchData


---

## 🧪 Test Coverage

- ✅ `todosReducer` unit tested
- ✅ `fetchTodosSaga` tested as generator
- 🛠️ Component testing scaffolded (more coming!)

```bash
npm run test
npm install
npm run dev


This project was built as part of a personal challenge to:

Level up from mid → senior developer mindset

Master Redux and Redux-Saga in real-world patterns

Write clean, testable, scalable frontend code
