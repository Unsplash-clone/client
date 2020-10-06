import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  imageContainer: {
    width: "100%",
    margin: "1rem auto",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    "&:hover svg": {
      opacity: "1",
    },
  },
  deleteContainer: {
    position: "absolute",
    right: "2.5rem",
    top: "1rem",
    cursor: "pointer",
  },
  DeleteIcon: {
    color: "red",
    opacity: "0",
    transition: "opacity .2s ease-in-out",
  },
  image: {
    width: "90%",
    margin: "0",
    borderRadius: "25px",
  },
}));
