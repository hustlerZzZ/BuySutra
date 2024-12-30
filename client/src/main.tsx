import App from "./App.tsx";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { createRoot } from "react-dom/client";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
