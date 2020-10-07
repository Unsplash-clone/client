import React, { useContext, useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

import Paper from "@material-ui/core/Paper";
import useStyles from "../styles/LoginStyles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";

import useInputState from "../hooks/useInputState";

import { TokenContext, DispatchTokenContext } from "../contexts/token.context";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

function Login() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [username, handleUsernameChange, resetUsername] = useInputState("");
  const [password, handlePasswordChange, resetPassword] = useInputState("");
  const [loginErrorMessage, setLoginErrorMessage] = useState(null);
  const [signupErrorMessage, setSignupErrorMessage] = useState(null);
  const [redirect, setRedirect] = useState(false);
  const [message, setMessage] = useState(null);
  const dispatchToken = useContext(DispatchTokenContext);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "/api/login",
        {
          username,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      dispatchToken({ type: "login", token: response.data.token });
      setRedirect(true);
      console.log(response.data);
    } catch (error) {
      console.log(error);
      setLoginErrorMessage("login error");
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "/api/signup",
        {
          username,
          password,
        },
        {
          header: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      setMessage("Signed Up Successfully");
      setValue(0);
    } catch (error) {
      console.log(error);
      setSignupErrorMessage("Signup error");
    }
  };

  return (
    <div className={classes.root}>
      {redirect && <Redirect to="/" />}
      <TabPanel
        value={value}
        index={0}
        dir={theme.direction}
        className={classes.tabpanel}
      >
        <Paper className={classes.paper}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="Login" {...a11yProps(0)} />
              <Tab label="Signup" {...a11yProps(1)} />
            </Tabs>
          </AppBar>
          <Typography
            variant="h4"
            component="h4"
            align="center"
            className={classes.heading}
            gutterBottom
          >
            My Unsplash
          </Typography>
          <form
            className={classes.form}
            noValidate
            autoComplete="off"
            onSubmit={handleLogin}
          >
            <TextField
              id="username"
              label="Username"
              value={username}
              onChange={handleUsernameChange}
              className={classes.input}
            />
            <TextField
              id="password"
              label="Password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className={classes.input}
            />

            <Typography variant="body2" gutterBottom color="error">
              {loginErrorMessage}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              type="submit"
            >
              Login
            </Button>
            {message && (
              <Typography variant="body2" gutterBottom color="primary">
                {message}
              </Typography>
            )}
          </form>
        </Paper>
      </TabPanel>
      <TabPanel
        value={value}
        index={1}
        dir={theme.direction}
        className={classes.tabpanel}
      >
        <Paper className={classes.paper}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="Login" {...a11yProps(0)} />
              <Tab label="Signup" {...a11yProps(1)} />
            </Tabs>
          </AppBar>
          <Typography
            variant="h4"
            component="h4"
            align="center"
            className={classes.heading}
            gutterBottom
          >
            My Unsplash
          </Typography>
          <form
            className={classes.form}
            noValidate
            autoComplete="off"
            onSubmit={handleSignup}
          >
            <TextField
              id="username"
              label="Username"
              value={username}
              onChange={handleUsernameChange}
              className={classes.input}
            />
            <TextField
              id="password"
              label="Password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className={classes.input}
            />
            <Typography variant="body2" gutterBottom color="error">
              {signupErrorMessage}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              type="submit"
            >
              Signup
            </Button>
          </form>
        </Paper>
      </TabPanel>
    </div>
  );
}

export default Login;
