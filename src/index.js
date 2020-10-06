import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";

import { TokenProvider } from "./contexts/token.context";
import { ImagesProvider } from "./contexts/images.context";
import { SearchProvider } from "./contexts/search.context";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <TokenProvider>
        <ImagesProvider>
          <SearchProvider>
            <App />
          </SearchProvider>
        </ImagesProvider>
      </TokenProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
