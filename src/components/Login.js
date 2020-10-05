import React from "react";

import Paper from "@material-ui/core/Paper";
import useStyles from "../styles/LoginStyles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function Login() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography
          variant="h4"
          component="h4"
          align="center"
          className={classes.heading}
          gutterBottom
        >
          My Unsplash
        </Typography>
        <div className={classes.subHeading}>
          <Typography variant="h5" component="h5" align="center">
            Login
          </Typography>
        </div>
        <form className={classes.form} noValidate autoComplete="off">
          <TextField id="username" label="Username" />
          <TextField id="password" label="Password" />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Login
          </Button>
        </form>
      </Paper>
    </div>
  );
}

export default Login;
