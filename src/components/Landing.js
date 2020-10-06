import React, { useContext, useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import axios from "axios";

import "./Landing.css";

import {
  ImagesContext,
  DispatchImagesContext,
} from "../contexts/images.context";
import { TokenContext } from "../contexts/token.context";

function Landing() {
  const token = useContext(TokenContext);
  const images = useContext(ImagesContext);
  const dispatchImages = useContext(DispatchImagesContext);

  useEffect(() => {
    const getProfile = async () => {
      const response = await axios.get("/api/user/images", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      dispatchImages({ type: "update", data: response.data.images });
    };
    getProfile();
  }, []);

  const renderImages = () => {
    return images.map((image) => <img src={image.url} />);
  };
  console.log(images);
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry>{renderImages()}</Masonry>
    </ResponsiveMasonry>
  );
}

export default Landing;
