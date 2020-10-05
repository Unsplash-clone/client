import React from "react";
import { Switch, Route } from "react-router-dom";

import { UserProvider } from "../contexts/user.context";
import Landing from "./Landing";
import Header from "./Header";
import Login from "./Login";
import useStyles from "../styles/AppStyles";

function App() {
  const classes = useStyles();
  return (
    <UserProvider>
      <div className={classes.root}>
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <>
                <Header />
                <Landing />
              </>
            )}
          />
          <Route path="/login" exact render={() => <Login />} />
          <Route render={() => <h1>404</h1>} />
        </Switch>
      </div>
    </UserProvider>
  );
}

export default App;
