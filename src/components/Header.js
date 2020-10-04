import React from "react";

import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

import logo from "../icons/my_unsplash_logo.svg";
import useStyles from "../styles/HeaderStyles";

function Header() {
  const classes = useStyles();
  return (
    <header className={classes.root}>
      <div className={classes.headerLeft}>
        <div>
          <img src={logo} />
        </div>
        <div className={classes.searchBar}>
          <SearchIcon className={classes.searchIcon} />
          <InputBase
            className={classes.input}
            placeholder="Search by name"
            inputProps={{ "aria-label": "search google maps" }}
          />
        </div>
      </div>
      <div>
        <div className={classes.btn}>Add a photo</div>
      </div>
    </header>
  );
}

export default Header;
