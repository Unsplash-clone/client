import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  paper: {
    margin: theme.spacing(1),
    width: "40%",
    padding: theme.spacing(2),
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
  subHeading: {
    marginBottom: theme.spacing(10),
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
  },
}));
