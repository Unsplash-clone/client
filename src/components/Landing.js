import React, { useContext, useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import axios from "axios";

import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import makeStyles from "../styles/LandingStyles";

import {
  ImagesContext,
  DispatchImagesContext,
} from "../contexts/images.context";
import { TokenContext } from "../contexts/token.context";
import { SearchContext } from "../contexts/search.context";

import useInputState from "../hooks/useInputState";

function Landing() {
  const classes = makeStyles();
  const token = useContext(TokenContext);
  const images = useContext(ImagesContext);
  const dispatchImages = useContext(DispatchImagesContext);
  const term = useContext(SearchContext);
  const [deleteImage, setDeleteImage] = useState({});
  const [password, setPassword, resetPassword] = useInputState("");

  const [open, setOpen] = React.useState(false);

  const handleDeleteIcon = async (image) => {
    setDeleteImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async () => {
    try {
      const response = await axios.post(
        "/api/user/deletepost",
        {
          password: password,
          uuid: deleteImage.uuid,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      dispatchImages({ type: "update", data: response.data.images });
    } catch (error) {}
    setOpen(false);
  };
  useEffect(() => {
    const getImages = async () => {
      const response = await axios.get("/api/user/images", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      dispatchImages({ type: "update", data: response.data.images });
    };
    getImages();
  }, []);

  const renderImages = () => {
    return images.map((image) =>
      image.label.includes(term) ? (
        <div className={classes.imageContainer}>
          <div
            className={classes.deleteContainer}
            onClick={() => handleDeleteIcon(image)}
          >
            <DeleteIcon className={classes.DeleteIcon} />
          </div>
          <img className={classes.image} src={image.url} />
        </div>
      ) : null
    );
  };
  console.log(images);
  return (
    <>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry className={classes.masonry}>{renderImages()}</Masonry>
      </ResponsiveMasonry>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{deleteImage.label}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter your password to confirm that you want to delete this
            image
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={setPassword}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="default">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Landing;
