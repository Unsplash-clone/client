import React, { createContext, useReducer } from "react";
import imagesReducer from "../reducers/images.reducer";

export const ImagesContext = createContext();
export const DispatchImagesContext = createContext();

export function ImagesProvider(props) {
  const [images, dispatch] = useReducer([], imagesReducer);

  return (
    <ImagesContext.Provider value={images}>
      <DispatchImagesContext.Provider value={dispatch}>
        {props.children}
      </DispatchImagesContext.Provider>
    </ImagesContext.Provider>
  );
}
