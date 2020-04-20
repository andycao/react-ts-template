import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Nav from "./Nav";
import List from "./pages/list";
import Index from "./pages/index";
import QueryDemo from "./pages/queryDemo";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/index">
            <Index />
          </Route>
          <Route path="/list">
            <List />
          </Route>
          <Route path="/queryDemo">
            <QueryDemo />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
