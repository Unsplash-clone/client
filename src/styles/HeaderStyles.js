import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
  },
  btnPhoto: {
    backgroundColor: "#3db46d",
    borderRadius: "32px",
    padding: "1rem 25px",
    color: "white",
    display: "inline-block",
    font: `normal bold 24px/1 "Open Sans", sans-serif;`,
    textAlign: "center",
    marginRight: "1rem",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#36a262",
    },
  },
  btnLogout: {
    backgroundColor: "#b45e91",
    borderRadius: "32px",
    padding: "1rem 25px",
    color: "white",
    display: "inline-block",
    font: `normal bold 24px/1 "Open Sans", sans-serif;`,
    textAlign: "center",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#6c3857",
    },
  },
  headerLeft: {
    display: "flex",
    alignItems: "center",
  },
  searchBar: {
    border: ".15rem solid #BDBDBD",
    borderRadius: "32px",
    height: "3rem",
    display: "flex",
    alignItems: "center",
    marginLeft: "20px",
  },
  searchIcon: {
    margin: "10px",
    color: "#BDBDBD",
  },
}));
