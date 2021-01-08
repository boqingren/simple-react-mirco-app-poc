import React from "react";
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import One from "./pages/One";
import Two from "./pages/Two";

const Router = HashRouter;

const Links = React.memo(() => {
  return (
    <div className="link-container">
      <p className="link-item-container">
        <Link to="/one">App2 One Page</Link>
      </p>
      <p className="link-item-container">
        <Link to="/two">App2 Two Page</Link>
      </p>
    </div >
  );
});

const App = () => {
  return (
    <Router basename="/app2">
      <Links />
      <div className="sub-content-container">
        <p>子应用内容区</p>
        <Switch>
          <Route path="/" component={One} exact />
          <Route path="/one" component={One} exact />
          <Route path="/two" component={Two} exact />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
