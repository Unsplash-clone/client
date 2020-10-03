import React from "react";
import { Switch, Route } from "react-router-dom";

import Landing from "./Landing";
import Header from "./Header";
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact render={() => <Landing />} />
        <Route render={() => <h1>404</h1>} />
      </Switch>
    </div>
  );
}

export default App;
