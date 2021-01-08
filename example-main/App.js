import React from 'react';
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import App1 from "@app1/App";
import App2 from "@app2/App";

const Router = HashRouter;

const Links = React.memo(() => {
  return (
    <div className="link-container">
      <p className="link-item-container">
        <Link to="/app1">App1</Link>
      </p>
      <p className="link-item-container">
        <Link to="/app2">App2</Link>
      </p>
    </div>
  );
});

const App = () => {
  return (
    <Router>
      <h1>Main Home</h1>
      <Links />
      <div className="sub-container">
        <h3>子应用</h3>
        <Switch>
          <Route path="/" component={App1} exact />
          <Route path="/app1" component={App1} />
          <Route path="/app2" component={App2} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
