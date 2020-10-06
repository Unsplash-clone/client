import React, { useContext, useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import axios from "axios";

import "./Landing.css";

import image1 from "../stock-images/fluffy.jpg";
import image2 from "../stock-images/golden-retriever.jpg";
import image3 from "../stock-images/HB4AT3D3IMI6TMPTWIZ74WAR54.jpg";
import image4 from "../stock-images/iphone6.png";
import image5 from "../stock-images/iphone6.png";
import image6 from "../stock-images/lady-img.jpg";
import image7 from "../stock-images/bella.jpg";
import image8 from "../stock-images/mashable.png";
import image9 from "../stock-images/pug.jpg";
import image10 from "../stock-images/tnw.png";
import { TokenContext } from "../contexts/token.context";

function Landing() {
  const token = useContext(TokenContext);
  const [images, setImages] = useState([]);
  useEffect(() => {
    const getImages = async () => {
      const response = await axios.get("/api/user/profile", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      console.log(response);
    };
    getImages();
  }, []);
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry>
        <img src={image1} />
        <img src={image2} />
        <img src={image3} />
        <img src={image8} />
        <img src={image5} />
        <img src={image7} />
        <img src={image9} />
        <img src={image10} />
      </Masonry>
    </ResponsiveMasonry>
  );
}

export default Landing;
