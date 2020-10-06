import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Landing from "./Landing";
import Header from "./Header";
import Login from "./Login";
import useStyles from "../styles/AppStyles";

import { TokenContext } from "../contexts/token.context";

function App() {
  const classes = useStyles();
  const token = useContext(TokenContext);
  return (
    <div className={classes.root}>
      <Switch>
        <Route
          path="/"
          exact
          render={
            token
              ? () => (
                  <>
                    <Header />
                    <Landing />
                  </>
                )
              : () => <Redirect to="/login" />
          }
        />
        <Route path="/login" exact render={() => <Login />} />
        <Route render={() => <h1>404</h1>} />
      </Switch>
    </div>
  );
}

export default App;
