import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./features/todo-app/store"; // update path if needed
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
