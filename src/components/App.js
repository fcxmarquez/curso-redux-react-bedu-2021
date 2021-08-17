import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import Users from "./users";
import Layout from "./Layout";

const Tasks = () => <div>404</div>;

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <div className="margin">
          <Route exact path="/" component={Users} />
          <Route exact path="/tasks" component={Tasks} />
        </div>
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
