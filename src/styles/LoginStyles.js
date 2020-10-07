import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  paper: {
    width: "100%",
    padding: 0,
    margin: 0,
    "& input": {
      width: "50%",
    },
  },
  tabpanel: {
    margin: theme.spacing(1),
    width: "40%",
    [theme.breakpoints.down("md")]: {
      width: "50%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "70%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
  },
  heading: {
    marginTop: theme.spacing(3),
  },
  form: {
    display: "flex",
    flexDirection: "column",
    "& div": {
      marginBottom: theme.spacing(1),
    },
  },
  button: {
    width: "80px",
    margin: "20px",
  },
  input: {
    margin: theme.spacing(2),
  },
}));
