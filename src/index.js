import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import ClockStore from "./Store/ClockStore";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={ClockStore}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
