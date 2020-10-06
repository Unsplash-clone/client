import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  imageContainer: {
    width: "100%",
    margin: "1rem auto",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  DeleteIcon: {
    position: "absolute",
    right: "2.5rem",
    top: "1rem",
  },
  image: {
    width: "90%",
    margin: "0",
    borderRadius: "25px",
  },
}));
