import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Nav from "./Nav";
import List from "./pages/list";
import Index from "./pages/index";
import QueryDemo from "./pages/queryDemo";
import Hits from "./pages/reduxHits";
import A from "./pages/A";
import HooksTest from "./pages/HooksTest";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Nav />
                <hr />
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
                    <Route path="/hits">
                        <Hits />
                    </Route>
                    <Route path="/recursive">
                        <A />
                    </Route>
                    <Route path="/hooks">
                        <HooksTest />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
