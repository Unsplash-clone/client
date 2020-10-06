import React, { useState } from "react";

import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

import logo from "../icons/my_unsplash_logo.svg";
import useStyles from "../styles/HeaderStyles";

function Header() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleUploadOpen = () => {
    setOpen(true);
  };

  const handleUploadClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    console.log("submitted");
  };

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
        <div className={classes.btn} onClick={handleUploadOpen}>
          Add a photo
        </div>
      </div>
      <Dialog
        open={open}
        onClose={handleUploadClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add a photo</DialogTitle>
        <DialogContent>
          <DialogContentText>Add a photo using Image URL</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="label"
            label="Label"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="imageUrl"
            label="Image URL"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleUploadClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </header>
  );
}

export default Header;
