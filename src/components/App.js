import React from "react";
import { Switch, Route } from "react-router-dom";

import Landing from "./Landing";
import Header from "./Header";
import useStyles from "../styles/AppStyles";

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <Switch>
        <Route path="/" exact render={() => <Landing />} />
        <Route render={() => <h1>404</h1>} />
      </Switch>
    </div>
  );
}

export default App;
