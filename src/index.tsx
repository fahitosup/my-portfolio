import { ColorModeScript } from "@chakra-ui/react";
import * as React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

// Create a root container
const root = document.getElementById("root");
const rootContainer = ReactDOM.createRoot(root);

// Render your app inside the root container
rootContainer.render(
  <React.StrictMode>
    <ColorModeScript />
    <App />
  </React.StrictMode>
);
