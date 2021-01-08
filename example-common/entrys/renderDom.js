import React from "react";
import ReactDOM from "react-dom";
import { serviceWorker } from "../utils";

const renderDom = (App, rootId) => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById(rootId)
  );

  serviceWorker.unregister();
};

export default renderDom;