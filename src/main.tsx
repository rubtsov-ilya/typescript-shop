import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.tsx";
import "./app/index.sass";
import { store } from "./redux/index.ts";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
