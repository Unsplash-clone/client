import React from "react";

import useStyles from "../styles/HeaderStyles";

function Header() {
  const classes = useStyles();
  return <div className={classes.root}>Header</div>;
}

export default Header;
