import React from "react";
import axios from "axios";

import Paper from "@material-ui/core/Paper";
// import useStyles from "../styles/LoginStyles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";

import useInputState from "../hooks/useInputState";

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

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
}));

function Login() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [username, handleUsernameChange, resetUsername] = useInputState("");
  const [password, handlePasswordChange, resetPassword] = useInputState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("/api/", {
        username,
        password,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignup = async () => {
    try {
      const response = await axios.post("/api/", {
        username,
        password,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes.root}>
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
      <TabPanel value={value} index={0} dir={theme.direction}>
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
            />
            <TextField
              id="password"
              label="Password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Login
            </Button>
          </form>
        </Paper>
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
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
            />
            <TextField
              id="password"
              label="Password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
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
