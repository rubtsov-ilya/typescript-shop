import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./app/App.tsx";
import "./app/index.sass";
import { store } from "./redux/index.ts";
import { Provider } from "react-redux";
import "./firebase.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLDivElement).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
